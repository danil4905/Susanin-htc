/* eslint-disable guard-for-in */
const cardsContainerDOM = document.querySelector('.news-content-cards');
const showMoreNewsDOM = document.querySelector('.show-more-news');
const listContainerDOM = document.querySelector('.news-content-list');
const btnCardsNewsDOM = document.getElementsByClassName('news-views-button__cards')[0];
const btnListNewsDOM = document.getElementsByClassName('news-views-button__list')[0];
const topArticleCardDOM = document.querySelector('.news-top-article');
const listIconDOM = document.querySelector('.news-views__icon-list');
const cardsIconDOM = document.querySelector('.news-views__icon-cards');
let newsMode = 'cards';
const JSONURL = 'http://localhost:3000/news';

function renderFirstListNews() {
    fetch(JSONURL)
        .then(response => response.json())
        .then((data) => {
            // eslint-disable-next-line no-restricted-syntax
            data[0].newsList.forEach((item) => {
                listContainerDOM.innerHTML += `
                    <li class="news-list__item">
                        <a href="#">
                            <div class="news-list-time">
                                ${item.time}
                            </div>
                            <div class="news-list-wrap">
                                <div class="news-list-title__item">
                                    ${item.title}
                                </div>
                                <div class="news-list-social">
                                    <div class="news-list-social__views">
                                        <svg class="comments-icon">
                                            <use xlink:href="#comments-icon"></use>
                                        </svg>
                                        ${item.comments}
                                    </div>
                                    <div class="news-list-social__comments">
                                        <svg class="eye-icon">
                                            <use xlink:href="#eye-icon"></use>
                                        </svg>
                                        ${item.views}
                                    </div>
                                </div>
                            </div>
                        </a>
                    </li>
                    `;
            });
        });
}
renderFirstListNews();

function generateLeftColumn(data) {
    const leftWrap = document.createElement('ul');
    leftWrap.classList.add('news-content-list-left');
    for (let i = 0; i < 4; i++) {
        leftWrap.innerHTML += `
            <li><a href="#">
                <article class="news-article__item">
                    <div class=${(data[i].classList) ? data[i].wrap : 'news-article-image'}>
                    ${(data[i].imgSource !== '' && data[i].imgSource !== undefined) ? `<img src=${data[i].imgSource}></img>` : ''}
                    </div>
                    <div class="${(data[i].classList !== '' && data[i].classList !== undefined) ? data[i].classList : 'news-article-content'}">
                        <p class="news-article__tex">${data[i].title}</p>
                        <span class="news-articel__date" data="">${data[i].time}</span>
                    </div>
                </article>
            </a></li>
        `;
    }
    return leftWrap;
}

function generateRightColumn(data) {
    const rightWrap = document.createElement('ul');
    rightWrap.classList.add('news-content-list-center');
    rightWrap.innerHTML += `
        <li><a href="#">
            <article class="news-article__item big-article-item"
                style=${data[4].fone}>
                <p class="news-article__text big-article__text">${data[4].title}</p>
                <span class="news-articel__date" data="">${data[4].time}</span>
            </article>
            </a></li>
        <li><a href="#">
            <article class="news-article__item">
                <div class="news-article-image"><img src=${data[5].imgSource} alt="">
                </div>
                <div class="news-article-content">
                    <p class="news-article__text">${data[5].title}</p>
                    <span class="news-articel__date" data="">${data[5].time}</span>
                </div>
            </article>
        </a></li>
        <li><a href="#">
            <article class="news-article__item">
                <div class=${(data[6].classList) ? data[6].wrap : 'news-article-image'}><img src=${data[6].imgSource} ></div>
                <div class="${(data[6].classList !== '' && data[6].classList !== undefined) ? data[6].classList : 'news-article-content'}">
                    <p class="news-article__text">${data[6].title}</p>
                    <span class="news-articel__date" data="">${data[6].time}</span>
                </div>
            </article>
        </a></li>
`;
    return rightWrap;
}

function renderRandomCardsNews(container, data) {
    const n = Math.floor(Math.random() * 3);
    let newsPath;
    switch (n) {
        case 0:
            newsPath = data[0].newsFirst;
            break;
        case 1:
            newsPath = data[0].newsSecond;
            break;
        default:
            newsPath = data[0].newsThird;
            break;
    }
    const newsContainerWrapper = document.createElement('div');
    newsContainerWrapper.classList.add('news-content-wrapper');
    newsContainerWrapper.appendChild(generateLeftColumn(newsPath));
    newsContainerWrapper.appendChild(generateRightColumn(newsPath));
    container.insertAdjacentElement('beforeend', newsContainerWrapper);
}

function switchToList() {
    newsMode = 'list';
    cardsContainerDOM.classList.add('closed');
    listContainerDOM.classList.remove('closed');
    topArticleCardDOM.classList.add('closed');
    listIconDOM.classList.add('news-views__icon-active');
    cardsIconDOM.classList.remove('news-views__icon-active');
    btnListNewsDOM.classList.add('news-views-button-active');
    btnCardsNewsDOM.classList.remove('news-views-button-active');
}

function switchToCards() {
    newsMode = 'cards';
    cardsContainerDOM.classList.remove('closed');
    listContainerDOM.classList.add('closed');
    topArticleCardDOM.classList.remove('closed');
    listIconDOM.classList.remove('news-views__icon-active');
    cardsIconDOM.classList.add('news-views__icon-active');
    btnListNewsDOM.classList.remove('news-views-button-active');
    btnCardsNewsDOM.classList.add('news-views-button-active');
}

function getMoreNews() {
    showMoreNewsDOM.innerHTML = '...';
    fetch(JSONURL)
        .then(response => response.json())
        .then((data) => {
            showMoreNewsDOM.innerHTML = 'Все новости';
            switch (newsMode) {
                case 'list':
                    renderFirstListNews();
                    break;

                default:
                    renderRandomCardsNews(cardsContainerDOM, data);
                    break;
            }
        });
}
showMoreNewsDOM.onclick = getMoreNews;
btnListNewsDOM.onclick = switchToList;
btnCardsNewsDOM.onclick = switchToCards;
