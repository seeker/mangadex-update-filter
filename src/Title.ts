import { Utils } from "./Utils";
import { DomFilter } from "./DomFilter";

/**
 * Represents a title entry on the main page.
 * This wraps the backing Element.
 */
export class Title {
    private hiddenAttribute : string = "hidden";

    private backingElement : Element;

    constructor (element : Element) {
        this.backingElement = element;
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