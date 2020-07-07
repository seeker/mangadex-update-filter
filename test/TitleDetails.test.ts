import { JSDOM } from "jsdom";
import { TitleDetails, FollowState } from "../src/TitleDetails";
import { TitleDetailHTML } from "./resources/TitleDetailHTML";

const originalDocument = buildDocument(TitleDetailHTML.notFollowing);
let document : Document;
let cut : TitleDetails;

function buildDocument(html: string): Document {
    return new JSDOM(html).window.window.document;
}

beforeEach(() => {
    document = originalDocument.cloneNode(true) as Document;
    cut = new TitleDetails(document);
});

it('adds a hide button', () => {
    expect(document.querySelector("#hide-button")).toBeTruthy();
});

it('not following state', () => {
    expect(cut.getFollowState()).toBe(FollowState.notFollowing);
});

it('reading state', () => {
    cut = new TitleDetails(buildDocument(TitleDetailHTML.reading));

    expect(cut.getFollowState()).toBe(FollowState.reading);
});

it('plan to read state', () => {
    cut = new TitleDetails(buildDocument(TitleDetailHTML.planToRead));
    
    expect(cut.getFollowState()).toBe(FollowState.planningToRead);
});

it('dropped state', () => {
    cut = new TitleDetails(buildDocument(TitleDetailHTML.dropped));
    
    expect(cut.getFollowState()).toBe(FollowState.dropped);
});

it('completed state', () => {
    cut = new TitleDetails(buildDocument(TitleDetailHTML.completed));
    
    expect(cut.getFollowState()).toBe(FollowState.completed);
});

it('on hold state', () => {
    cut = new TitleDetails(buildDocument(TitleDetailHTML.onHold));
    
    expect(cut.getFollowState()).toBe(FollowState.onHold);
});
