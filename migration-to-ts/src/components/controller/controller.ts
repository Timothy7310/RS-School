import AppLoader from './appLoader';

import { DrawnSources } from './loader';
import { DrawNews } from './loader';

class AppController extends AppLoader {
    getSources(callback: (data: DrawnSources) => void) {
        super.getResp(
            {
                endpoint: 'sources',
            },
            callback
        );
    }

    getNews(e: Event, callback: (data: DrawNews) => void) {
        let target = e.target as HTMLInputElement;
        const newsContainer = e.currentTarget as HTMLInputElement;

        while (target !== newsContainer) {
            if (target.classList.contains('source__item')) {
                const sourceId = target.getAttribute('data-source-id');
                if (newsContainer.getAttribute('data-source') !== sourceId) {
                    newsContainer.setAttribute('data-source', sourceId as string);
                    super.getResp(
                        {
                            endpoint: 'everything',
                            options: {
                                sources: sourceId as string,
                            },
                        },
                        callback
                    );
                }
                return;
            }
            target = target.parentNode as HTMLInputElement;
        }
    }
}

export default AppController;
