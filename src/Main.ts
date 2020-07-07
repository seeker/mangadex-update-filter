import { DomFilter } from "./DomFilter";
import { Title } from "./Title";
import { Persistence } from "./Persistence"
import { Utils } from "./Utils";

runScript();

function runScript() {
    if(document.URL == "https://mangadex.org/") {
        console.log("On main page");
        mainPage();
    }

    if(document.URL.includes("title")) {
        console.log("On title page: " + Utils.getTitleID(document.URL));
    }
}

function mainPage() {
    let latest = DomFilter.filterLatestTitles(document);
    let persistence : Persistence = new Persistence("md-uf-");

    latest.forEach(
        (value) => {
            new Title(value, persistence);
    });
}
