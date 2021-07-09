/* eslint-disable no-param-reassign */
/* eslint-disable no-plusplus */
/* eslint-disable no-loop-func */
/* eslint-disable func-names */
const formInputs = [].slice.call(
    document.getElementsByClassName('modal-input')
);

const errorTextContainer = document.getElementsByClassName(
    'modal-error-wrapper-text'
)[0];
const submitFormButton = document.getElementsByClassName('form-button__submit')[0];
const modalError = document.getElementsByClassName('modal-error-wrapper')[0];
let errorMessage = '';
inputPattern = /[0-9A-Za-z,.<>/?;:'{}|`~!@#$%&*()-_+=]/g;

function isRequired(value) {
    if (value) return true;
    errorMessage = 'Поле обязательно для заполнения';
    return false;
}

function minValueTwo(value) {
    if (value.length >= 2) return true;
    errorMessage = 'Минимальное количество символов: 2';
    return false;
}

function minValueSix(value) {
    if (value.length >= 6) return true;
    errorMessage = 'Минимальное количество символов: 6';
    return false;
}

function maxValueFiftine(value) {
    if (value.length <= 50) return true;
    errorMessage = 'Максимальное количество символов: 50';
    return false;
}

function maxValueThungreed(value) {
    if (value.length <= 100) return true;
    errorMessage = 'Максимальное количество символов: 100';
    return false;
}

function matchRex(value) {
    if (value.match(inputPattern) && value.match(inputPattern).length === value.length) return true;
    errorMessage = 'Допускаюстя: латинские буквы, цифры и спецсимволы - ,.<>/?;:{}|\'~!@#$%&*()-_+=]\'';
    return false;
}

const LOGINSCHEME = [minValueTwo, maxValueFiftine, isRequired, matchRex];
const PASSWORDSCEME = [minValueSix, maxValueFiftine, isRequired, matchRex];
const NAMESCHEME = [minValueTwo, maxValueFiftine, isRequired, matchRex];
const SURNAMESCHEME = [minValueTwo, maxValueFiftine, isRequired, matchRex];
const EMAILSCHEME = [minValueSix, maxValueThungreed, isRequired, matchRex];

formInputs.forEach((element) => {
    element.ondrop = function () {
        return false;
    };
    element.onpaste = function () {
        return false;
    };
});

formInputs[0].onkeyup = function () {
    for (let i = 0; i < LOGINSCHEME.length; i++) {
        if (LOGINSCHEME[i](formInputs[0].value)) {
            modalError.classList.add('closed');
            submitFormButton.disabled = false;
            formInputs[0].classList.remove('invalid-input');
        } else {
            errorTextContainer.innerHTML = errorMessage;
            modalError.classList.remove('closed');
            submitFormButton.disabled = true;
            formInputs[0].classList.add('invalid-input');
            break;
        }
    }
};
formInputs[1].onkeyup = function () {
    for (let i = 0; i < PASSWORDSCEME.length; i++) {
        if (PASSWORDSCEME[i](formInputs[1].value)) {
            modalError.classList.add('closed');
            submitFormButton.disabled = false;
            formInputs[1].classList.remove('invalid-input');
        } else {
            errorTextContainer.innerHTML = errorMessage;
            modalError.classList.remove('closed');
            submitFormButton.disabled = true;
            formInputs[1].classList.add('invalid-input');
            break;
        }
    }
};
formInputs[2].onkeyup = function () {
    for (let i = 0; i < NAMESCHEME.length; i++) {
        if (NAMESCHEME[i](formInputs[2].value)) {
            modalError.classList.add('closed');
            submitFormButton.disabled = false;
            formInputs[2].classList.remove('invalid-input');
        } else {
            errorTextContainer.innerHTML = errorMessage;
            modalError.classList.remove('closed');
            submitFormButton.disabled = true;
            formInputs[2].classList.add('invalid-input');
            break;
        }
    }
};
formInputs[3].onkeyup = function () {
    for (let i = 0; i < SURNAMESCHEME.length; i++) {
        if (SURNAMESCHEME[i](formInputs[3].value)) {
            modalError.classList.add('closed');
            submitFormButton.disabled = false;
            formInputs[3].classList.remove('invalid-input');
        } else {
            errorTextContainer.innerHTML = errorMessage;
            modalError.classList.remove('closed');
            submitFormButton.disabled = true;
            formInputs[3].classList.add('invalid-input');
            break;
        }
    }
};
formInputs[4].onkeyup = function () {
    for (let i = 0; i < EMAILSCHEME.length; i++) {
        if (EMAILSCHEME[i](formInputs[4].value)) {
            modalError.classList.add('closed');
            submitFormButton.disabled = false;
            formInputs[4].classList.remove('invalid-input');
        } else {
            errorTextContainer.innerHTML = errorMessage;
            modalError.classList.remove('closed');
            submitFormButton.disabled = true;
            formInputs[4].classList.add('invalid-input');
            break;
        }
    }
};
formInputs[5].onkeyup = function () {
    for (let i = 0; i < PASSWORDSCEME.length; i++) {
        if (PASSWORDSCEME[i](formInputs[5].value)) {
            modalError.classList.add('closed');
            submitFormButton.disabled = false;
            formInputs[5].classList.remove('invalid-input');
        } else {
            errorTextContainer.innerHTML = errorMessage;
            modalError.classList.remove('closed');
            submitFormButton.disabled = true;
            formInputs[5].classList.add('invalid-input');
            break;
        }
    }
};
