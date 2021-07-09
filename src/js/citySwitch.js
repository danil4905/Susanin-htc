const cityActive = document.getElementsByClassName('current-city__name')[0];
const headerCityButton = document.getElementsByClassName('header-city')[0];
const cityArray = document.getElementsByClassName('header-city__switch');
const listOfCities = document.getElementsByClassName('list-of-cities')[0];
const arrowCity = document.querySelector('.city');

cityActive.innerHTML = cityArray[0].value;

function switchCity() {
    listOfCities.classList.remove('closed');
    cityActive.classList.add('closed');
    arrowCity.classList.add('closed');
    seacrhBtn.disabled = true;
}

function closeCitySwitch() {
    listOfCities.classList.add('closed');
    cityActive.classList.remove('closed');
    arrowCity.classList.remove('closed');
}

function chooseCity(event) {
    const city = event.target.closest('button');
    cityActive.innerHTML = city.value;
    seacrhBtn.disabled = false;
    closeCitySwitch();
}
document.addEventListener('keydown', (e) => {
    if (e.keyCode === 27) closeCitySwitch();
});
document.addEventListener('click', (event) => {
    if (!event.target.classList.contains('current-city__name')) {
        if (!event.target.classList.contains('header-city')) {
            if (event.target.tagName !== 'use') {
                if (event.target.tagName !== 'svg') {
                    closeCitySwitch();
                    seacrhBtn.disabled = false;
                }
            }
        }
    }
});
headerCityButton.onclick = switchCity;
arrowCity.onclick = switchCity;
listOfCities.onclick = chooseCity;
