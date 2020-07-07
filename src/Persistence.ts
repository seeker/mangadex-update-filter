import * as ls from "local-storage";
import { FollowState } from "./TitleDetails";

export class Persistence {
    private currentVersion: Number = 1;
    private keyPrefix: string;

    constructor (keyPrefix: string) {
        this.keyPrefix = keyPrefix;

        if(ls.get<Number>(keyPrefix + "version") == undefined) {
            ls.set<Number>(keyPrefix + "version", this.currentVersion);
        } 
    }
    
    private combinedId(titleId: string): string {
        return this.keyPrefix + titleId;
    }

    public ignoreTitle(titleId: string): void {
        this.setFollowState(titleId, FollowState.ignored);
    }

    public setFollowState(titleId: string, state: FollowState) {
        ls.set<FollowState>(this.combinedId(titleId), state);
    }

    public getFollowState(titleId: string) : FollowState {
        let state = ls.get<FollowState>(this.combinedId(titleId));

        if(typeof  state === "string" && state == "ignored") {
            state = FollowState.ignored;
            this.setFollowState(titleId, state);
        }

        return state;
    }

    public isIgnored(titleId: string): boolean {
        let vaule = ls.get(this.combinedId(titleId));

        if (vaule == null) {
            return false;
        } else {
            return true;
        }
    }

    public clearIgnoredTitle(titleId: string): void {
        ls.remove(this.combinedId(titleId));
    }
}
