import { DomFilter } from "./DomFilter";
import { Title } from "./Title";
import { Persistence } from "./Persistence"
import { Utils } from "./Utils";
import { TitleDetails } from "./TitleDetails";

runScript();

function runScript() {
    let persistence : Persistence = new Persistence("md-uf-");

    if(document.URL == "https://mangadex.org/") {
        console.log("On main page");
        mainPage(persistence);
    }

    if(document.URL.includes("title")) {
        console.log("On title page: " + Utils.getTitleID(document.URL));
        let td = new TitleDetails(document, persistence);
        td.updateFollowStatus();
    }
}

function mainPage(persistence: Persistence) {
    let latest = DomFilter.filterLatestTitles(document);

    latest.forEach(
        (value) => {
            new Title(value, persistence);
    });
}
