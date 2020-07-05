import { Persistence } from "../src/Persistence";
import { Builder, WebDriver } from "selenium-webdriver"

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
