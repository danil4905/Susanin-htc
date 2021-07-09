/* eslint-disable no-plusplus */
/* eslint-disable no-loop-func */
/* eslint-disable func-names */

const btnBurger = document.getElementsByClassName('burger-switch');
const menu = document.getElementsByClassName('big-menu')[0];
const addNav = document.getElementsByClassName('header-nav-additional');
const topNav = document.getElementsByClassName('header-nav-list')[0];
const rightNav = document.getElementsByClassName('header-nav-main-tel')[0];
const burgerButtons = document.getElementsByClassName('burger-switch-btn');
const headerCityBlock = document.getElementsByClassName('header-city')[0];
const headerScroll = document.getElementsByClassName('header-main-wrapper')[0];
const headerScrollAdd = headerScroll.getElementsByClassName('header-main-container')[0];

addNav[0].style.fontSize = '16px';

function scrollClosedMenu() {
    addNav[0].classList.remove('closed');
    document.getElementsByClassName('header-rate')[0].classList.add('closed');
    document.getElementsByClassName('header-social')[0].classList.add('closed');
    document.getElementsByClassName('header-login')[0].classList.add('closed');
    burgerButtons[0].classList.remove('closed');
    burgerButtons[1].classList.add('closed');
    burgerButtons[2].classList.remove('closed');
    burgerButtons[3].classList.add('closed');
    headerScroll.classList.add('scrolled-header');
    headerScrollAdd.classList.add('scrolled-header');
    btnBurger[0].classList.remove('closed');
    btnBurger[1].classList.add('closed');
    headerCityBlock.classList.add('closed');
    searchInput.classList.add('search-active-scroll');
    if (window.matchMedia('(max-width: 1050px)').matches) {
        seacrhBtn.classList.add('closed');
        btnBurger[0].style.backgroundColor = '#1e2a38';
    }
    if (window.matchMedia('(max-width: 360px)').matches) {
        headerScrollAdd.classList.add('scrolled-mobile-header');
    }
    seacrhBtn.classList.add('seacrh__btn-active-scroll');
    document.getElementsByClassName('logo')[0].classList.add('logo-scroll');
}

function scrollOpenedMenu() {
    document.getElementsByClassName('header-rate')[0].classList.add('closed');
    document.getElementsByClassName('header-social')[0].classList.add('closed');
    document.getElementsByClassName('header-login')[0].classList.add('closed');
    burgerButtons[0].classList.add('closed');
    burgerButtons[1].classList.remove('closed');
    burgerButtons[2].classList.add('closed');
    burgerButtons[3].classList.remove('closed');
    btnBurger[0].classList.remove('closed');
    btnBurger[1].classList.add('closed');
    headerCityBlock.classList.add('closed');
    headerScroll.classList.add('scrolled-header');
    headerScrollAdd.classList.add('scrolled-header');
    if (window.matchMedia('(max-width: 1050px)').matches) {
        seacrhBtn.classList.remove('closed');
        btnBurger[0].style.backgroundColor = '#1e2a38';
    }
    if (window.matchMedia('(max-width: 360px)').matches) {
        headerScrollAdd.classList.add('scrolled-mobile-header');
    }
    menu.style.top = '50px';
    searchInput.classList.add('search-active-scroll');
    seacrhBtn.classList.add('seacrh__btn-active-scroll');
    document.getElementsByClassName('logo')[0].classList.add('logo-scroll');
}

function unScrollClosedMenu() {
    addNav[1].classList.remove('closed');
    topNav.classList.remove('hidden');
    rightNav.classList.remove('hidden');
    addNav[0].classList.add('closed');
    document.getElementsByClassName('header-rate')[0].classList.remove('closed');
    document.getElementsByClassName('header-social')[0].classList.remove('closed');
    document.getElementsByClassName('header-login')[0].classList.remove('closed');
    btnBurger[0].classList.add('closed');
    btnBurger[1].classList.remove('closed');
    if (window.matchMedia('(max-width: 1050px)').matches) {
        seacrhBtn.classList.remove('closed');
    }
    headerScrollAdd.classList.remove('scrolled-mobile-header');
    headerScroll.classList.remove('scrolled-header');
    headerScrollAdd.classList.remove('scrolled-header');
    headerCityBlock.classList.remove('closed');
    searchInput.classList.remove('search-active-scroll');
    seacrhBtn.classList.remove('seacrh__btn-active-scroll');
    document.getElementsByClassName('logo')[0].classList.remove('logo-scroll');
}

function unScrollOpenedMenu() {
    addNav[0].classList.add('closed');
    document.getElementsByClassName('header-rate')[0].classList.remove('closed');
    document.getElementsByClassName('header-social')[0].classList.remove('closed');
    document.getElementsByClassName('header-login')[0].classList.remove('closed');
    btnBurger[0].classList.add('closed');
    btnBurger[1].classList.remove('closed');
    topNav.classList.add('hidden');
    rightNav.classList.add('hidden');
    headerCityBlock.classList.remove('closed');
    menu.style.top = '140px';
    if (window.matchMedia('(max-width: 360px)').matches) {
        headerScrollAdd.classList.add('scrolled-mobile-header');
    }
    headerScrollAdd.classList.remove('scrolled-mobile-header');
    headerScroll.classList.remove('scrolled-header');
    headerScrollAdd.classList.remove('scrolled-header');
    searchInput.classList.remove('search-active-scroll');
    seacrhBtn.classList.remove('seacrh__btn-active-scroll');
    document.getElementsByClassName('logo')[0].classList.remove('logo-scroll');
}
window.onscroll = function () {
    if (window.pageYOffset >= 50) {
        if (menu.classList.contains('closed')) {
            scrollClosedMenu();
        } else {
            scrollOpenedMenu();
        }
    }
    if (window.pageYOffset < 50) {
        if (menu.classList.contains('closed')) {
            unScrollClosedMenu();
        } else {
            unScrollOpenedMenu();
        }
    }
};

btnBurger[0].onclick = function () {
    if (menu.classList.contains('closed')) {
        menu.classList.remove('closed');
        addNav[0].classList.add('closed');
        burgerButtons[0].classList.add('closed');
        burgerButtons[1].classList.remove('closed');
        menu.style.top = '50px';
        hideModal();
        btnOpen.disabled = true;
    } else {
        menu.classList.add('closed');
        addNav[0].classList.remove('closed');
        burgerButtons[0].classList.remove('closed');
        burgerButtons[1].classList.add('closed');
        btnOpen.disabled = false;
    }
};
btnBurger[1].onclick = function () {
    if (menu.classList.contains('closed')) {
        menu.classList.remove('closed');
        addNav[1].classList.add('closed');
        burgerButtons[2].classList.add('closed');
        burgerButtons[3].classList.remove('closed');
        rightNav.classList.add('hidden');
        topNav.classList.add('hidden');
        menu.style.top = '140px';
        btnOpen.disabled = true;
        hideModal();
    } else {
        menu.classList.add('closed');
        addNav[1].classList.remove('closed');
        burgerButtons[2].classList.remove('closed');
        burgerButtons[3].classList.add('closed');
        rightNav.classList.remove('hidden');
        topNav.classList.remove('hidden');
        btnOpen.disabled = false;
    }
};
document.addEventListener('click', (event) => {
    if (!event.target.classList.contains('header-burger-text') && !event.target.classList.contains('big-menu') && !event.target.classList.contains('burger-switch')) {
        menu.classList.add('closed');
        if (window.pageYOffset >= 50) {
            addNav[0].classList.remove('closed');
        }
        burgerButtons[0].classList.remove('closed');
        burgerButtons[1].classList.add('closed');
        btnOpen.disabled = false;
        menu.classList.add('closed');
        addNav[1].classList.remove('closed');
        burgerButtons[2].classList.remove('closed');
        burgerButtons[3].classList.add('closed');
        rightNav.classList.remove('hidden');
        topNav.classList.remove('hidden');
        btnOpen.disabled = false;
    }
});
