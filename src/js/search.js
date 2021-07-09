const seacrhBtn = document.getElementsByClassName('search-btn')[0];
const searchInput = document.getElementsByClassName('search-input')[0];
const searchContainer = document.getElementsByClassName('header-search')[0];

function activateSearch() {
    searchInput.classList.remove('closed');
    searchInput.classList.add('opened');
    seacrhBtn.classList.add('seacrh__btn-active');
}

function deactivateSearch() {
    searchContainer.classList.remove('search-small');
    searchInput.classList.remove('opened');
    searchInput.classList.add('closed');
    seacrhBtn.classList.remove('seacrh__btn-active');
}
const handleSearch = () => {
    if (searchInput.classList.contains('closed')) {
        if (window.matchMedia('(max-width: 1050px)').matches) {
            searchContainer.classList.add('search-small');
        }
        activateSearch();
        if (!menu.classList.contains('closed')) {
            menu.classList.add('closed');
            burgerButtons[2].classList.remove('closed');
            burgerButtons[3].classList.add('closed');
            addNav[1].classList.remove('closed');
            topNav.classList.remove('hidden');
            rightNav.classList.remove('hidden');
            addNav[0].classList.add('closed');
        }
    } else {
        deactivateSearch();
    }
};

seacrhBtn.onclick = handleSearch;
document.addEventListener('click', (event) => {
    if (!event.target.classList.contains('search-input')) {
        if (!event.target.classList.contains('search')) {
            if (event.target.tagName !== 'use') {
                deactivateSearch();
            }
        }
    }
});
