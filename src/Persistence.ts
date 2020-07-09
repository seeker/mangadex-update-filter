import localForage from "localforage";
import { FollowState } from "./TitleDetails";

export class Persistence {
    private currentVersion: number = 1;
    private databaseName: string;

    constructor (databaseName: string = "mangadex-update-filter") {
        this.databaseName = databaseName;

        localForage.config({
            name: this.databaseName,
            version: this.currentVersion,
            storeName: "title-state",
            description: "Store title follow and ignore state"
        });
    }

    public async ignoreTitle(titleId: string) {
        await this.setFollowState(titleId, FollowState.ignored);
    }

    public async setFollowState(titleId: string, state: FollowState) {
        await localForage.setItem(titleId, state);
    }

    public async getFollowState(titleId: string) : Promise<FollowState> {
        let state = await localForage.getItem<FollowState>(titleId);

        return Promise.resolve(state);
    }

    public isIgnored(titleId: string): Promise<boolean> {
        console.log("Checking if " + titleId + " is ignored");
        return this.getFollowState(titleId).then((res) =>{
            if (res == null) {
                return Promise.resolve(false);
            } else {
                return Promise.resolve(res !== FollowState.notFollowing);
            }
        }).catch(()=> {return Promise.reject()});
    }

    public clearIgnoredTitle(titleId: string): void {
        localForage.removeItem(titleId);
    }
}
