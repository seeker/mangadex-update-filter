import { DomFilter } from "./DomFilter";
import { JSDOM, DOMWindow } from "jsdom";


const html : string = `
                    <div>
					<div class="hover sm_md_logo rounded float-left mr-2"><a href="/title/48697/this-girl-will-express-herself-in-100-days"><img class="rounded max-width" src="https://mangadex.org/images/manga/48697.thumb.jpg"></a></div>

					<div class="pt-0 pb-1 mb-1 border-bottom d-flex align-items-center flex-nowrap">
						<div><span class="fas fa-book fa-fw mr-1" aria-hidden="true"></span></div><a class="manga_title text-truncate " title="This Girl Will Express Herself in 100 Days" href="/title/48697/this-girl-will-express-herself-in-100-days">This Girl Will Express Herself in 100 Days</a>
					</div>
				</div><div class="col-md-6 border-bottom p-2">
					<div class="hover sm_md_logo rounded float-left mr-2"><a href="/title/23279/wonder-cat-kyuu-chan"><img class="rounded max-width" src="https://mangadex.org/images/manga/23279.thumb.jpg"></a></div>

					<div class="pt-0 pb-1 mb-1 border-bottom d-flex align-items-center flex-nowrap">
						<div><span class="fas fa-book fa-fw mr-1" aria-hidden="true"></span></div><a class="manga_title text-truncate " title="Wonder Cat Kyuu-chan" href="/title/23279/wonder-cat-kyuu-chan">Wonder Cat Kyuu-chan</a>
					</div>
				</div><div class="col-md-6 border-bottom p-2">
					<div class="hover sm_md_logo rounded float-left mr-2"><a href="/title/644/l-dk"><img class="rounded max-width" src="https://mangadex.org/images/manga/644.thumb.jpg"></a></div>
					<div class="pt-0 pb-1 mb-1 border-bottom d-flex align-items-center flex-nowrap">
						<div><span class="fas fa-book fa-fw mr-1" aria-hidden="true"></span></div><a class="manga_title text-truncate " title="L&amp;hearts;DK" href="/title/644/l-dk">L♥DK</a>
                    </div>
                    </div>
`
let titleID : string = "1234567";
let titleName : string = "this-is-a-titles-name";
let titleURL : string;
let titleURLs : string[] = ["/title/48697/this-girl-will-express-herself-in-100-days", "/title/23279/wonder-cat-kyuu-chan", "/title/644/l-dk"];
let jsdom : DOMWindow; 
let window : DOMWindow;
let testDocument : Document;

beforeEach(() => {
    jsdom = new JSDOM(html).window;
    window = jsdom.window;
    testDocument = window.document;
});

it('Extract title id from link', () => {
    expect(DomFilter.filterTitleURLFromHome(testDocument)).toEqual(expect.arrayContaining(titleURLs));
});
