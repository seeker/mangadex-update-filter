import { Utils } from "./Utils";
import { Persistence } from "./Persistence";

/**
 * Class for interacting with the title document.
 * The URL is in the from of https://mangadex.org/title/{title-id}/{title-name}
 */
export class TitleDetails {
    private backingDocument;

    constructor (document: Document) {
        this.backingDocument = document;
        this.addHideButton();
    }

    public addHideButton() {
        let ID = Utils.getTitleID(this.backingDocument.URL);
        let followButtonDiv = this.backingDocument.querySelector("div.btn-group");
        let persistence: Persistence = new Persistence("md-uf-");

        let button: Element = this.backingDocument.createElement("input");
        button.setAttribute("type", "button");
        button.setAttribute("value", "Hide");
        button.setAttribute("id", "hide-button")

        button.addEventListener("click", (e: Event) => {
            persistence.ignoreTitle(ID);
            console.log("Title with ID " + ID + " hidden");
        });

        followButtonDiv.appendChild(button);
    }
}