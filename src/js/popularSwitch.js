const udmPopularCards = document.querySelector('.popular-udm-cards');
const rusPopularCards = document.querySelector('.popular-rus-cards');
const worldPopularCards = document.querySelector('.popular-world-cards');
const popularCardsSwitcher = document.querySelectorAll('.popular-nav__item');

for (let i = 0; i < popularCardsSwitcher.length; i++) {
    popularCardsSwitcher[i].onclick = function () {
        switch (popularCardsSwitcher[i].textContent) {
            case 'в России':
                udmPopularCards.classList.add('closed');
                worldPopularCards.classList.add('closed');
                rusPopularCards.classList.remove('closed');
                popularCardsSwitcher[1].classList.add('popular-nav__item-active');
                popularCardsSwitcher[0].classList.remove('popular-nav__item-active');
                popularCardsSwitcher[2].classList.remove('popular-nav__item-active');
                break;
            case 'в мире':
                udmPopularCards.classList.add('closed');
                worldPopularCards.classList.remove('closed');
                rusPopularCards.classList.add('closed');
                popularCardsSwitcher[2].classList.add('popular-nav__item-active');
                popularCardsSwitcher[1].classList.remove('popular-nav__item-active');
                popularCardsSwitcher[0].classList.remove('popular-nav__item-active');
                break;
            default:
                udmPopularCards.classList.remove('closed');
                worldPopularCards.classList.add('closed');
                rusPopularCards.classList.add('closed');
                popularCardsSwitcher[0].classList.add('popular-nav__item-active');
                popularCardsSwitcher[1].classList.remove('popular-nav__item-active');
                popularCardsSwitcher[2].classList.remove('popular-nav__item-active');
                break;
        }
    };
}
