import * as ls from "local-storage";

export class Persistence {
    private currentVersion: Number = 1;
    private keyPrefix: string;

    constructor (keyPrefix: string) {
        this.keyPrefix = keyPrefix;
    }
    
    private combinedId(titleId: string): string {
        return this.keyPrefix + titleId;
    }

    public ignoreTitle(titleId: string): void {
        ls.set<string>(this.combinedId(titleId), "ignored");
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
