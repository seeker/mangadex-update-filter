import { Utils } from "./Utils";
import { Persistence } from "./Persistence";

export enum FollowState {
    notFollowing,
    reading,
    planningToRead,
    dropped,
    completed,
    onHold
}

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

    public getFollowState(): FollowState {
        let buttonText: string = this.getFollowButtonText();

        let followState = FollowState.notFollowing;

        switch (buttonText) {
            case "Follow":
                followState = FollowState.notFollowing;
                break;

            case "Reading":
                followState = FollowState.reading;
                break;

            case "Plan to read":
                followState = FollowState.planningToRead;
                break;

            case "Dropped":
                followState = FollowState.dropped;
                break;

            case "Completed":
                followState = FollowState.completed;
                break;

            case "On hold":
                followState = FollowState.onHold;
                break;

            default:
                throw new Error("Unknown follow state");       
        }

        return followState;
    }

    private getFollowButtonText(): string {
        let followButtonDiv: Element = this.backingDocument.querySelector("div.btn-group > button > span.d-xl-inline");
        return followButtonDiv.innerHTML;
    }
}