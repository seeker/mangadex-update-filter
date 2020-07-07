import { JSDOM } from "jsdom";
import { TitleDetails } from "../src/TitleDetails";
import { TitleDetailHTML } from "./resources/TitleDetailHTML";


const jsdom : JSDOM = new JSDOM(TitleDetailHTML.notFollowing);
const window = jsdom.window;
const originalDocument = window.document;
let document : Document;
let cut : TitleDetails;

beforeEach(() => {
    document = originalDocument.cloneNode(true) as Document;
    cut = new TitleDetails(document);
});

it('adds a hide button', () => {
    expect(document.querySelector("#hide-button")).toBeTruthy();
});
