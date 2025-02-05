import { Utils } from "./Utils";
import { Persistence } from "./Persistence";

export enum FollowState {
    notFollowing,
    reading,
    planningToRead,
    dropped,
    completed,
    onHold,
    ignored
}

/**
 * Class for interacting with the title document.
 * The URL is in the from of https://mangadex.org/title/{title-id}/{title-name}
 */
export class TitleDetails {
    private backingDocument;
    private persistence: Persistence;
    private titleID: string;

    constructor (document: Document, persistence: Persistence) {
        this.backingDocument = document;
        this.persistence = persistence;
        this.titleID = Utils.getTitleID(this.backingDocument.URL);

        this.addHideButton();
    }

    public addHideButton() {
        let followButtonDiv = this.backingDocument.querySelector("div.btn-group");
        let persistence: Persistence = new Persistence();

        let button: Element = this.backingDocument.createElement("input");
        button.setAttribute("type", "button");
        button.setAttribute("value", "Hide");
        button.setAttribute("id", "hide-button")

        button.addEventListener("click", (e: Event) => {
            persistence.ignoreTitle(this.titleID);
        });

        followButtonDiv.appendChild(button);
    }

    public async updateFollowStatus() {
        let pageFollowState: FollowState = this.getFollowState();

        const state = await this.persistence.getFollowState(this.titleID);
        const isIgnored = await this.persistence.isIgnored(this.titleID);

        if(pageFollowState === FollowState.notFollowing && state !== FollowState.ignored) {
            this.persistence.clearIgnoredTitle(this.titleID);
            return;
        }

        if(state === FollowState.ignored || !isIgnored) {
            this.persistence.setFollowState(this.titleID, pageFollowState);
            return;
        }

        if(state !== pageFollowState) {
            this.persistence.setFollowState(this.titleID, pageFollowState);
            return;
        }
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