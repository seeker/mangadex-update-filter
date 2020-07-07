import { JSDOM } from "jsdom";
import { TitleDetails, FollowState } from "../src/TitleDetails";
import { TitleDetailHTML } from "./resources/TitleDetailHTML";
import { Persistence } from "../src/Persistence";
import { mock, instance, verify, when, anyString, anyNumber } from "ts-mockito";

const originalDocument = buildDocument(TitleDetailHTML.notFollowing);
const titleID: string = "23279";

let document : Document;
let cut : TitleDetails;
let persistenceMock: Persistence;
let persistence: Persistence;


function buildDocument(html: string): Document {
    let dom: JSDOM = new JSDOM(html);
    dom.reconfigure({url: "https://mangadex.org/title/23279/title-name"});

    return dom.window.window.document;
}

beforeEach(() => {
    document = originalDocument.cloneNode(true) as Document;
    persistenceMock = mock(Persistence);
    persistence = instance(persistenceMock);

    cut = new TitleDetails(document, persistence);
});

it('adds a hide button', () => {
    expect(document.querySelector("#hide-button")).toBeTruthy();
});

it('not following state', () => {
    expect(cut.getFollowState()).toBe(FollowState.notFollowing);
});

it('reading state', () => {
    cut = new TitleDetails(buildDocument(TitleDetailHTML.reading), persistence);

    expect(cut.getFollowState()).toBe(FollowState.reading);
});

it('plan to read state', () => {
    cut = new TitleDetails(buildDocument(TitleDetailHTML.planToRead), persistence);
    
    expect(cut.getFollowState()).toBe(FollowState.planningToRead);
});

it('dropped state', () => {
    cut = new TitleDetails(buildDocument(TitleDetailHTML.dropped), persistence);
    
    expect(cut.getFollowState()).toBe(FollowState.dropped);
});

it('completed state', () => {
    cut = new TitleDetails(buildDocument(TitleDetailHTML.completed), persistence);
    
    expect(cut.getFollowState()).toBe(FollowState.completed);
});

it('on hold state', () => {
    cut = new TitleDetails(buildDocument(TitleDetailHTML.onHold), persistence);
    
    expect(cut.getFollowState()).toBe(FollowState.onHold);
});

it('follow state is updated', () => {
    cut = new TitleDetails(buildDocument(TitleDetailHTML.onHold), persistence);
    cut.updateFollowStatus();

    verify(persistenceMock.setFollowState(titleID, FollowState.onHold)).called();
});

it('follow state is not updated if already present', () => {
    when(persistenceMock.isIgnored(anyString())).thenReturn(true);
    persistence = instance(persistenceMock);

    cut = new TitleDetails(buildDocument(TitleDetailHTML.onHold), persistence);
    cut.updateFollowStatus();
    
    verify(persistenceMock.setFollowState(anyString(), anyNumber())).never();
});

it('do not set follow state if not following', () => {
    when(persistenceMock.isIgnored(anyString())).thenReturn(false);
    persistence = instance(persistenceMock);

    cut = new TitleDetails(buildDocument(TitleDetailHTML.notFollowing), persistence);
    cut.updateFollowStatus();

    verify(persistenceMock.setFollowState(anyString(), anyNumber())).never();
});

it('update state if ignore is stored, but follow status is different', () => {
    when(persistenceMock.isIgnored(anyString())).thenReturn(true);
    when(persistenceMock.getFollowState(anyString())).thenReturn(FollowState.ignored);
    persistence = instance(persistenceMock);

    cut = new TitleDetails(buildDocument(TitleDetailHTML.reading), persistence);
    cut.updateFollowStatus();

    verify(persistenceMock.setFollowState(anyString(), FollowState.reading)).once();
});
