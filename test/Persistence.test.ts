import { Persistence } from "../src/Persistence";
import { Builder, WebDriver } from "selenium-webdriver"
import { FollowState } from "../src/TitleDetails";

const testPrefix: string = "md-filter-test"

let titleIdIgnored : string = "1234567";
let titleIdNotIgnored : string = "897";

let cut: Persistence;
let driver: WebDriver;

beforeAll(async () => {
    driver = await new Builder().forBrowser('chrome').build();
    await driver.get('https://mangadex.org/');
}, 60000);

afterAll(() => {
    driver.quit();
});

beforeEach(() => {
    cut = new Persistence(testPrefix);

    cut.clearIgnoredTitle(titleIdIgnored);
    cut.clearIgnoredTitle(titleIdNotIgnored);

    cut.ignoreTitle(titleIdIgnored);
});

it('Check that title is ignored', async () => {
    await expect(cut.isIgnored(titleIdIgnored)).resolves.toBe(true);
});

it('Check that title is not ignored', async () => {
    await expect(cut.isIgnored(titleIdNotIgnored)).resolves.toBe(false);
});

it('Check that title ignore can be cleared', async () => {
    cut.clearIgnoredTitle(titleIdIgnored);

    await expect(cut.isIgnored(titleIdIgnored)).resolves.toBe(false);
});

it('Check that title can be ignored', async () => {
    cut.ignoreTitle(titleIdNotIgnored);
    
    await expect(cut.isIgnored(titleIdNotIgnored)).resolves.toBe(true);
});

it('Titles with a follow state are ignored', async () => {
    cut.setFollowState(titleIdNotIgnored, FollowState.reading);
    
    await expect(cut.isIgnored(titleIdNotIgnored)).resolves.toBe(true);
});

it('can read stored follow state', async () => {
    cut.setFollowState(titleIdNotIgnored, FollowState.reading);
    
    await expect(cut.getFollowState(titleIdNotIgnored)).resolves.toBe(FollowState.reading);
});

it('Read follow state from ignored entry', async () => {
    await expect(cut.getFollowState(titleIdIgnored)).resolves.toBe(FollowState.ignored);
});

it('not following follow state does not count as ignored', async () => {
    cut.setFollowState(titleIdNotIgnored, FollowState.notFollowing);

    await expect(cut.isIgnored(titleIdNotIgnored)).resolves.toBe(false);
});
