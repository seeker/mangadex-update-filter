import { Utils } from "./Utils";

let titleID : string = "1234567";
let titleName : string = "this-is-a-titles-name";
let titleURL : string;

beforeEach(() => {
    titleURL = `https://mangadex.org/title/${titleID}/${titleName}`;
});


it('Extract title id from link', () => {
    expect(Utils.getTitleID(titleURL)).toBe(titleID);
});
