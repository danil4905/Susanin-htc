const listOfDays = document.getElementsByClassName('news-days__item-btn');

for (let i = 0; i < listOfDays.length; i++) {
    listOfDays[i].onclick = function () {
        for (let j = 0; j < listOfDays.length; j++) {
            if (listOfDays[j].classList.contains('news-days__item-btn-active')) {
                listOfDays[j].classList.remove('news-days__item-btn-active');
                listOfDays[i].classList.add('news-days__item-btn-active');
            }
        }
    };
}
