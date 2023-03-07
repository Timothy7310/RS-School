import News from './news/news';
import Sources from './sources/sources';

import { DrawnSources } from '../controller/loader';
import { DrawNews } from '../controller/loader';

export class AppView {
    news;
    sources;

    constructor() {
        this.news = new News();
        this.sources = new Sources();
    }

    drawNews(data: DrawNews) {
        const values = data?.articles ? data?.articles : [];
        this.news.draw(values);
    }

    drawSources(data: DrawnSources) {
        const values = data?.sources ? data?.sources : [];
        this.sources.draw(values);
    }
}

export default AppView;
