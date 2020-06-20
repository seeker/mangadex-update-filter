export class DomFilter {
    constructor() {}

    /**
     * Return a list of title URLs from the Home page.
     * @param html of the page to filter for URLs
     */
    public static filterTitleURLFromHome(documentTofilter: Document): string[] {
        let titles: NodeListOf<Element> = documentTofilter.querySelectorAll(".manga_title");
        
        let urls : string[] = [];
        titles.forEach(elem => {urls.push(elem.getAttribute("href"))})

        return urls;
    }
}