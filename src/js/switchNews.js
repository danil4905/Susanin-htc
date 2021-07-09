const listOfThemes = document.getElementsByClassName('news-nav__item');
const lastNews = document.getElementsByClassName('last-news');
const choiseNews = document.getElementsByClassName('choise-news')[0];
const popularNews = document.getElementsByClassName('popular-news')[0];
const socialNews = document.getElementsByClassName('social-news')[0];


function showPopularNews() {
    for (let i = 0; i < lastNews.length; i++) {
        lastNews[i].classList.add('closed');
    }
    choiseNews.classList.add('closed');
    popularNews.classList.remove('closed');
    socialNews.classList.add('closed');
    for (let j = 0; j < listOfThemes.length; j++) {
        listOfThemes[j].classList.remove('news-nav__item-active');
    }
    listOfThemes[2].classList.add('news-nav__item-active');
}

function showSocialNews() {
    socialNews.classList.remove('closed');
    choiseNews.classList.add('closed');
    popularNews.classList.add('closed');
    for (let i = 0; i < lastNews.length; i++) {
        lastNews[i].classList.add('closed');
    }
    for (let j = 0; j < listOfThemes.length; j++) {
        listOfThemes[j].classList.remove('news-nav__item-active');
    }
    listOfThemes[3].classList.add('news-nav__item-active');
}

function showChoiseNews() {
    for (let i = 0; i < lastNews.length; i++) {
        lastNews[i].classList.add('closed');
    }
    choiseNews.classList.remove('closed');
    popularNews.classList.add('closed');
    socialNews.classList.add('closed');
    for (let j = 0; j < listOfThemes.length; j++) {
        listOfThemes[j].classList.remove('news-nav__item-active');
    }
    listOfThemes[1].classList.add('news-nav__item-active');
}

function showLastNews() {
    for (let i = 0; i < lastNews.length; i++) {
        lastNews[i].classList.remove('closed');
    }
    choiseNews.classList.add('closed');
    popularNews.classList.add('closed');
    socialNews.classList.add('closed');
    for (let j = 1; j < listOfThemes.length; j++) {
        listOfThemes[j].classList.remove('news-nav__item-active');
    }
    listOfThemes[0].classList.add('news-nav__item-active');
}
listOfThemes[0].onclick = showLastNews;
listOfThemes[1].onclick = showChoiseNews;
listOfThemes[2].onclick = showPopularNews;
listOfThemes[3].onclick = showSocialNews;
