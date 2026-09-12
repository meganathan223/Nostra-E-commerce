// navbar open, close
const navbar = document.querySelector('.pages');
const menubar = document.querySelector('.menubar');
const closenav = document.querySelector('.closenav');
const offerBar = document.querySelector('.offer-bar .close');

menubar.addEventListener('click', function () {
    navbar.classList.add('show');
})

closenav.addEventListener('click', function () {
    navbar.classList.remove('show');
})

offerBar.addEventListener('click', function () {
    offerBar.parentElement.style.display = 'none';
})