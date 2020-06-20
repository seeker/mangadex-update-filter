export class Utils {
    constructor() {}

    public static getTitleID(url : string) : string {
        let components = url.split("/");
        return components[4];
    }
}
