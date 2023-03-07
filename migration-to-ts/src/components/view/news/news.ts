import './news.css';

import { NewsData } from '../../controller/loader';

class News {
    draw(data: NewsData[]) {
        const news = data.length >= 10 ? data.filter((_item, idx) => idx < 10) : data;

        const fragment = document.createDocumentFragment();
        const newsItemTemp = document.querySelector('#newsItemTemp') as HTMLTemplateElement;

        news.forEach((item, idx) => {
            const newsClone = newsItemTemp.content.cloneNode(true) as HTMLElement;

            if (idx % 2) {
                const newsItem = newsClone.querySelector('.news__item') as HTMLElement;
                newsItem.classList.add('alt');
            }

            const newsMetaPhoto = newsClone.querySelector('.news__meta-photo') as HTMLElement;
            const newsMetaAuthor = newsClone.querySelector('.news__meta-author') as HTMLElement;
            const newsMetaDate = newsClone.querySelector('.news__meta-date') as HTMLElement;
            const newsDescriptionTitle = newsClone.querySelector('.news__description-title') as HTMLElement;
            const newsDescriptionSource = newsClone.querySelector('.news__description-source') as HTMLElement;
            const newsDescriptionContent = newsClone.querySelector('.news__description-content') as HTMLElement;
            const newsReadMoreLink = newsClone.querySelector('.news__read-more a') as HTMLElement;

            newsMetaPhoto.style.backgroundImage = `url(${item.urlToImage || 'img/news_placeholder.jpg'})`;
            newsMetaAuthor.textContent = item.author || item.source.name;
            newsMetaDate.textContent = item.publishedAt.slice(0, 10).split('-').reverse().join('-');
            newsDescriptionTitle.textContent = item.title;
            newsDescriptionSource.textContent = item.source.name;
            newsDescriptionContent.textContent = item.description;
            newsReadMoreLink.setAttribute('href', item.url);

            fragment.append(newsClone);
        });

        const newsContainer = document.querySelector('.news') as HTMLElement;
        newsContainer.innerHTML = '';
        newsContainer.appendChild(fragment);
    }
}

export default News;