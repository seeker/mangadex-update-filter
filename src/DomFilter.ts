export class DomFilter {
    constructor() {}

    /**
     * Returns a list of all latest update elements. This should allow for easy deletion.
     * @param documentTofilter document from the main page
     */
    public static filterLatestTitles(documentTofilter: Document): NodeListOf<Element> {
        let updates : NodeListOf<Element> = documentTofilter.querySelectorAll("#latest_update div.col-md-6");
        return updates;
    }

    public static extractUrlFromTitle(element: Element): string {
        return element.querySelector(".manga_title").getAttribute("href");
    }

    public static extractAllUrlsFromTitle(elements: NodeListOf<Element>): string[] {
        let urls : string[] = [];

        elements.forEach(element => {urls.push(this.extractUrlFromTitle(element))});

        return urls;
    }
}