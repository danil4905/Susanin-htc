const btnOpen = document.getElementById('switch-btn');
const btnClose = document.getElementById('modal-nav__close');
const modal = document.getElementById('modal');
const signinForm = document.getElementById('modal-form__signin');
const loginForm = document.getElementById('modal-form__login');
const signinBtn = document.getElementById('button-signin');
const loginBtn = document.getElementById('button-login');
let auth = 'login';

const showModal = () => {
    modal.style.animationName = 'animatetop';
    modal.classList.toggle('closed');
    document.body.classList.toggle('unscroll-element');
};
const hideModal = () => {
    modal.style.animationName = 'animatedown';
    modal.classList.add('closed');
    document.body.classList.remove('unscroll-element');
};
const clearForms = () => {
    for (let i = 0; i < formInputs.length; i++) {
        formInputs[i].value = '';
    }
};
if (window.matchMedia('(max-width: 1050px)').matches) {
    hideModal();
}
const showSigninForm = () => {
    auth = 'signin';
    loginBtn.classList.remove('auth-active');
    signinBtn.classList.add('auth-active');
    loginForm.classList.remove('opened');
    loginForm.classList.add('closed');
    signinForm.classList.add('opened');
    signinForm.classList.remove('closed');
};
const showLoginForm = () => {
    auth = 'login';
    signinBtn.classList.remove('auth-active');
    loginBtn.classList.add('auth-active');
    signinForm.classList.remove('opened');
    signinForm.classList.add('closed');
    loginForm.classList.remove('closed');
    loginForm.classList.add('opened');
};
const switchAuth = () => {
    if (auth === 'login') {
        showSigninForm();
        clearForms();
        document.getElementsByClassName('modal-error-wrapper')[0].classList.add('closed');
    } else if (auth === 'signin') {
        showLoginForm();
        clearForms();
        document.getElementsByClassName('modal-error-wrapper')[0].classList.add('closed');
    }
};

document.addEventListener('keydown', (e) => {
    if (e.keyCode === 27) hideModal();
});
document.getElementById('main').onclick = hideModal;

signinBtn.onclick = switchAuth;
loginBtn.onclick = switchAuth;
btnOpen.onclick = showModal;
btnClose.onclick = hideModal;
