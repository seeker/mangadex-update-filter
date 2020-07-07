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

it('Check that title is ignored', () => {
    expect(cut.isIgnored(titleIdIgnored)).toBe(true);
});

it('Check that title is not ignored', () => {
    expect(cut.isIgnored(titleIdNotIgnored)).toBe(false);
});

it('Check that title ignore can be cleared', () => {
    cut.clearIgnoredTitle(titleIdIgnored);

    expect(cut.isIgnored(titleIdIgnored)).toBe(false);
});

it('Check that title can be ignored', () => {
    cut.ignoreTitle(titleIdNotIgnored);
    
    expect(cut.isIgnored(titleIdNotIgnored)).toBe(true);
});

it('Titles with a follow state are ignored', () => {
    cut.setFollowState(titleIdNotIgnored, FollowState.reading);
    
    expect(cut.isIgnored(titleIdNotIgnored)).toBe(true);
});

it('can read stored follow state', () => {
    cut.setFollowState(titleIdNotIgnored, FollowState.reading);
    
    expect(cut.getFollowState(titleIdNotIgnored)).toBe(FollowState.reading);
});

it('Read follow state from ignored entry', () => {
    expect(cut.getFollowState(titleIdIgnored)).toBe(FollowState.ignored);
});

it('not following follow state does not count as ignored', () => {
    cut.setFollowState(titleIdNotIgnored, FollowState.notFollowing);

    expect(cut.isIgnored(titleIdNotIgnored)).toBe(false);
});
