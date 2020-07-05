import { Utils } from "./Utils";
import { DomFilter } from "./DomFilter";
import { Persistence } from "./Persistence";

/**
 * Represents a title entry on the main page.
 * This wraps the backing Element.
 */
export class Title {
    private hiddenAttribute : string = "hidden";

    private backingElement : Element;
    private persistence : Persistence;

    constructor (element : Element, persistence: Persistence) {
        this.backingElement = element;
        this.persistence = persistence;
        this.addHideButton();
    }

    private addHideButton() : void {
        let button : Element = this.backingElement.ownerDocument.createElement("input");
        button.setAttribute("type", "button");
        button.setAttribute("value", "H");

        button.addEventListener("click", (e:Event) => {
            this.hideTitle();
            this.persistence.ignoreTitle(this.getID());
        });

        this.backingElement.appendChild(button);

        if (this.persistence.isIgnored(this.getID())) {
            this.hideTitle();
        }
    }

    public getID() {
        let url = DomFilter.extractUrlFromTitle(this.backingElement);
        let components = url.split("/");
        return components[2];
    }

    public hideTitle() {
        this.backingElement.setAttribute(this.hiddenAttribute, null);
    }

    public showTitle() {
        this.backingElement.removeAttribute(this.hiddenAttribute);
    }
}