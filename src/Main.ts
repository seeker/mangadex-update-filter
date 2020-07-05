import { DomFilter } from "./DomFilter";
import { Title } from "./Title";
import { Persistence } from "./Persistence"

runScript();

function runScript() {
    let latest = DomFilter.filterLatestTitles(document);
    let persistence : Persistence = new Persistence("md-uf");

    latest.forEach(
        (value) => {
            new Title(value, persistence);
    });
}
