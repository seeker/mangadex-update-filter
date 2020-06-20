import { DomFilter } from "./DomFilter";
import { JSDOM, DOMWindow } from "jsdom";


const html : string = `
<div class="card mb-3">
            <h6 class="card-header text-center"><span class="fas fa-external-link-alt fa-fw " aria-hidden="true"></span> <a href="/updates">Latest updates</a></h6>
            <div class="card-header p-0">
                <ul class="nav nav-pills nav-justified" role="tablist">
                    <li class="nav-item"><a class="nav-link active" href="#latest_update" aria-controls="latest_update" data-toggle="tab">All</a></li>
                    <li class="nav-item"><a class="nav-link" href="#follows_update" aria-controls="follows_update" data-toggle="tab">Follows</a></li>
                </ul>
            </div>
            <!-- Tab panes -->
            <div class="tab-content">
                <div role="tabpanel" class="tab-pane active" id="latest_update"><div class="row m-0"><div class="col-md-6 border-bottom p-2">
					<div class="hover sm_md_logo rounded float-left mr-2"><a href="/title/27856/winter-moon"><img class="rounded max-width" src="https://mangadex.org/images/manga/27856.thumb.jpg"></a></div>

					<div class="pt-0 pb-1 mb-1 border-bottom d-flex align-items-center flex-nowrap">
						<div><span class="fas fa-book fa-fw mr-1" aria-hidden="true"></span></div><a class="manga_title text-truncate " title="Winter Moon" href="/title/27856/winter-moon">Winter Moon</a>
					</div>

					<div class="py-0 mb-1 row no-gutters align-items-center flex-nowrap"><span class="far fa-file fa-fw col-auto mr-1" aria-hidden="true"></span><a class="text-truncate" href="/chapter/932253" style="flex: 0 1 auto;">Vol. 3 Chapter 53</a><div class="ml-1"><span class="rounded flag flag-gb" title="English"></span></div></div>
					<div class="text-truncate py-0 mb-1"><span class="fas fa-users fa-fw " aria-hidden="true"></span> <a href="/group/5764/merryweather-comics">Merryweather Comics</a></div>
					<div class="text-truncate py-0 mb-1"><span class="far fa-clock fa-fw " aria-hidden="true"></span> 1 min <span class="d-none d-xl-inline">ago</span></div>
				</div><div class="col-md-6 border-bottom p-2">
					<div class="hover sm_md_logo rounded float-left mr-2"><a href="/title/9012/red-storm"><img class="rounded max-width" src="https://mangadex.org/images/manga/9012.thumb.jpg"></a></div>

					<div class="pt-0 pb-1 mb-1 border-bottom d-flex align-items-center flex-nowrap">
						<div><span class="fas fa-book fa-fw mr-1" aria-hidden="true"></span></div><a class="manga_title text-truncate " title="Red Storm" href="/title/9012/red-storm">Red Storm</a>
					</div>

					<div class="py-0 mb-1 row no-gutters align-items-center flex-nowrap"><span class="far fa-file fa-fw col-auto mr-1" aria-hidden="true"></span><a class="text-truncate" href="/chapter/931094" style="flex: 0 1 auto;">Vol. 16 Chapter 354</a><div class="ml-1"><span class="rounded flag flag-gb" title="English"></span></div></div>
					<div class="text-truncate py-0 mb-1"><span class="fas fa-users fa-fw " aria-hidden="true"></span> <a href="/group/12273/method-scans">Method Scans</a> | <a href="/group/6553/_-_-scans">¯\_(ツ)_/¯ Scans</a></div>
					<div class="text-truncate py-0 mb-1"><span class="far fa-clock fa-fw " aria-hidden="true"></span> 13 mins <span class="d-none d-xl-inline">ago</span></div>
				</div><div class="col-md-6 border-bottom p-2">
					<div class="hover sm_md_logo rounded float-left mr-2"><a href="/title/42227/social-survival-rabbits"><img class="rounded max-width" src="https://mangadex.org/images/manga/42227.thumb.jpg"></a></div>

					<div class="pt-0 pb-1 mb-1 border-bottom d-flex align-items-center flex-nowrap">
						<div><span class="fas fa-book fa-fw mr-1" aria-hidden="true"></span></div><a class="manga_title text-truncate " title="Social Survival Rabbits" href="/title/42227/social-survival-rabbits">Social Survival Rabbits</a>
					</div>

					<div class="py-0 mb-1 row no-gutters align-items-center flex-nowrap"><span class="far fa-file fa-fw col-auto mr-1" aria-hidden="true"></span><a class="text-truncate" href="/chapter/932247" style="flex: 0 1 auto;">Vol. 1 Chapter 9.5</a><div class="ml-1"><span class="rounded flag flag-gb" title="English"></span></div></div>
					<div class="text-truncate py-0 mb-1"><span class="fas fa-users fa-fw " aria-hidden="true"></span> <a href="/group/11936/ebs-shit-scan">Ebs Shit Scan</a></div>
					<div class="text-truncate py-0 mb-1"><span class="far fa-clock fa-fw " aria-hidden="true"></span> 16 mins <span class="d-none d-xl-inline">ago</span></div>
				</div><div class="col-md-6 border-bottom p-2">
					<div class="hover sm_md_logo rounded float-left mr-2"><a href="/title/49943/jk-shousetsuka-ppoi"><img class="rounded max-width" src="https://mangadex.org/images/manga/49943.thumb.jpg"></a></div>

					<div class="pt-0 pb-1 mb-1 border-bottom d-flex align-items-center flex-nowrap">
						<div><span class="fas fa-book fa-fw mr-1" aria-hidden="true"></span></div><a class="manga_title text-truncate " title="JK Shousetsuka ppoi!" href="/title/49943/jk-shousetsuka-ppoi">JK Shousetsuka ppoi!</a>
					</div>

					<div class="py-0 mb-1 row no-gutters align-items-center flex-nowrap"><span class="far fa-file fa-fw col-auto mr-1" aria-hidden="true"></span><a class="text-truncate" href="/chapter/932242" style="flex: 0 1 auto;">Vol. 1 Chapter 9</a><div class="ml-1"><span class="rounded flag flag-gb" title="English"></span></div></div>
					<div class="text-truncate py-0 mb-1"><span class="fas fa-users fa-fw " aria-hidden="true"></span> <a href="/group/657/no-group">no group</a></div>
					<div class="text-truncate py-0 mb-1"><span class="far fa-clock fa-fw " aria-hidden="true"></span> 20 mins <span class="d-none d-xl-inline">ago</span></div>
                </div>
                <div class="col-md-6 border-bottom p-2">
					<div class="hover sm_md_logo rounded float-left mr-2"><a href="/title/40767/maou-to-ore-no-hangyakuki"><img class="rounded max-width" src="https://mangadex.org/images/manga/40767.thumb.jpg"></a></div>

					<div class="pt-0 pb-1 mb-1 border-bottom d-flex align-items-center flex-nowrap">
						<div><span class="fas fa-book fa-fw mr-1" aria-hidden="true"></span></div><a class="manga_title text-truncate " title="Maou to Ore no Hangyakuki" href="/title/40767/maou-to-ore-no-hangyakuki">Maou to Ore no Hangyakuki</a>
					</div>

					<div class="py-0 mb-1 row no-gutters align-items-center flex-nowrap"><span class="far fa-file fa-fw col-auto mr-1" aria-hidden="true"></span><a class="text-truncate" href="/chapter/932240" style="flex: 0 1 auto;">Vol. 3 Chapter 11</a><div class="ml-1"><span class="rounded flag flag-gb" title="English"></span></div></div>
					<div class="text-truncate py-0 mb-1"><span class="fas fa-users fa-fw " aria-hidden="true"></span> <a href="/group/10614/galaxy-degen-scans">Galaxy Degen Scans</a> | <a href="/group/5793/zts">ZTS</a></div>
					<div class="text-truncate py-0 mb-1"><span class="far fa-clock fa-fw " aria-hidden="true"></span> 24 mins <span class="d-none d-xl-inline">ago</span></div>
                </div>
                </div></div>
                <div role="tabpanel" class="tab-pane" id="follows_update">
                    <div class="col-md-6 border-bottom p-2">
					<div class="hover sm_md_logo rounded float-left mr-2"><a href="/title/23774/tensei-shitara-dragon-no-tamago-datta-ibara-no-dragon-road"><img class="rounded max-width" src="https://mangadex.org/images/manga/23774.thumb.jpg"></a></div>

					<div class="pt-0 pb-1 mb-1 border-bottom d-flex align-items-center flex-nowrap">
						<div><span class="fas fa-book fa-fw mr-1" aria-hidden="true"></span></div><a class="manga_title text-truncate " title="Tensei Shitara Dragon no Tamago Datta - Ibara no Dragon Road" href="/title/23774/tensei-shitara-dragon-no-tamago-datta-ibara-no-dragon-road">Tensei Shitara Dragon no Tamago Datta - Ibara no Dragon Road</a>
					</div>

					<div class="py-0 mb-1 row no-gutters align-items-center flex-nowrap"><span class="far fa-file fa-fw col-auto mr-1" aria-hidden="true"></span><a class="text-truncate" href="/chapter/929763" style="flex: 0 1 auto;">Chapter 15</a><div class="ml-1"><span class="rounded flag flag-gb" title="English"></span></div></div>
					<div class="text-truncate py-0 mb-1"><span class="fas fa-users fa-fw " aria-hidden="true"></span> <a href="/group/610/tigoris-translates">Tigoris Translates</a></div>
					<div class="text-truncate py-0 mb-1"><span class="far fa-clock fa-fw " aria-hidden="true"></span> 2 days <span class="d-none d-xl-inline">ago</span></div>
				</div><div class="col-md-6 border-bottom p-2">
					<div class="hover sm_md_logo rounded float-left mr-2"><a href="/title/17709/kumo-desu-ga-nani-ka"><img class="rounded max-width" src="https://mangadex.org/images/manga/17709.thumb.jpg"></a></div>

					<div class="pt-0 pb-1 mb-1 border-bottom d-flex align-items-center flex-nowrap">
						<div><span class="fas fa-book fa-fw mr-1" aria-hidden="true"></span></div><a class="manga_title text-truncate " title="Kumo Desu ga, Nani ka?" href="/title/17709/kumo-desu-ga-nani-ka">Kumo Desu ga, Nani ka?</a>
					</div>

					<div class="py-0 mb-1 row no-gutters align-items-center flex-nowrap"><span class="far fa-file fa-fw col-auto mr-1" aria-hidden="true"></span><a class="text-truncate" href="/chapter/929708" style="flex: 0 1 auto;">Chapter 44.2</a><div class="ml-1"><span class="rounded flag flag-gb" title="English"></span></div></div>
					<div class="text-truncate py-0 mb-1"><span class="fas fa-users fa-fw " aria-hidden="true"></span> <a href="/group/506/aumakua">aumakua</a></div>
					<div class="text-truncate py-0 mb-1"><span class="far fa-clock fa-fw " aria-hidden="true"></span> 2 days <span class="d-none d-xl-inline">ago</span></div>
				</div><div class="col-md-6 border-bottom p-2">
					<div class="hover sm_md_logo rounded float-left mr-2"><a href="/title/13871/dungeon-meshi"><img class="rounded max-width" src="https://mangadex.org/images/manga/13871.thumb.jpg"></a></div>

					<div class="pt-0 pb-1 mb-1 border-bottom d-flex align-items-center flex-nowrap">
						<div><span class="fas fa-book fa-fw mr-1" aria-hidden="true"></span></div><a class="manga_title text-truncate " title="Dungeon Meshi" href="/title/13871/dungeon-meshi">Dungeon Meshi</a>
					</div>

					<div class="py-0 mb-1 row no-gutters align-items-center flex-nowrap"><span class="far fa-file fa-fw col-auto mr-1" aria-hidden="true"></span><a class="text-truncate" href="/chapter/928128" style="flex: 0 1 auto;">Chapter 65</a><div class="ml-1"><span class="rounded flag flag-gb" title="English"></span></div></div>
					<div class="text-truncate py-0 mb-1"><span class="fas fa-users fa-fw " aria-hidden="true"></span> <a href="/group/231/everydayheroes-scans">#EverydayHeroes Scans</a></div>
					<div class="text-truncate py-0 mb-1"><span class="far fa-clock fa-fw " aria-hidden="true"></span> 4 days <span class="d-none d-xl-inline">ago</span></div>
				</div><div class="col-md-6 border-bottom p-2">
					<div class="hover sm_md_logo rounded float-left mr-2"><a href="/title/48045/sousou-no-frieren"><img class="rounded max-width" src="https://mangadex.org/images/manga/48045.thumb.jpg"></a></div>

					<div class="pt-0 pb-1 mb-1 border-bottom d-flex align-items-center flex-nowrap">
						<div><span class="fas fa-book fa-fw mr-1" aria-hidden="true"></span></div><a class="manga_title text-truncate " title="Sousou no Frieren" href="/title/48045/sousou-no-frieren">Sousou no Frieren</a>
					</div>

					<div class="py-0 mb-1 row no-gutters align-items-center flex-nowrap"><span class="far fa-file fa-fw col-auto mr-1" aria-hidden="true"></span><a class="text-truncate" href="/chapter/927970" style="flex: 0 1 auto;">Chapter 7</a><div class="ml-1"><span class="rounded flag flag-gb" title="English"></span></div></div>
					<div class="text-truncate py-0 mb-1"><span class="fas fa-users fa-fw " aria-hidden="true"></span> <a href="/group/452/kirei-cake">Kirei Cake</a></div>
					<div class="text-truncate py-0 mb-1"><span class="far fa-clock fa-fw " aria-hidden="true"></span> 4 days <span class="d-none d-xl-inline">ago</span></div>
				</div></div>                </div>
            </div>
        </div>
`
let titleURLs : string[] = ["/title/27856/winter-moon", "/title/9012/red-storm", "/title/40767/maou-to-ore-no-hangyakuki"];

const titleInLatest : string = "9012";
const titleInFollowing : string = "13871";
const jsdom : JSDOM = new JSDOM(html);
const window = jsdom.window;
const document = window.document;
let testDocument : Document;

beforeEach(() => {
    testDocument = document.cloneNode(true) as Document;
});

it('Check element count', () => {
    expect(DomFilter.filterLatestTitles(testDocument)).toHaveLength(5);
});

it('Extract title URL', () => {
    let elements = DomFilter.filterLatestTitles(testDocument);

    expect(DomFilter.extractUrlFromTitle(elements[0])).toEqual(titleURLs[0]);
});

it('Extract all title URLs', () => {
    let elements = DomFilter.filterLatestTitles(testDocument);

    expect(DomFilter.extractAllUrlsFromTitle(elements)).toEqual(expect.arrayContaining(titleURLs));
});

it('Must contain latest title', () => {
    let elements = DomFilter.filterLatestTitles(testDocument);
    let urls = DomFilter.extractAllUrlsFromTitle(elements);

    expect(urls).toEqual(expect.arrayContaining(titleURLs))
});
