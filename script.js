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

offerBar?.addEventListener('click', function () {
    offerBar.parentElement.style.display = 'none';
})

// image slider
const slider = document.querySelector('.slider');
const sliderItems = document.querySelectorAll('.slider-item');
const leftBtn = document.querySelector('.btn.left');
const rightBtn = document.querySelector('.btn.right');

leftBtn.addEventListener('click', prevSlide)
rightBtn.addEventListener('click', nextSlide)

let currentSlide = 0;
const slideCount = sliderItems.length;

function slideImage(index) {
    currentSlide = index;
    slider.style.transform = `translateX(-${currentSlide * 33.33}%)`;
}

function nextSlide() {
    // console.log('nextslide')
    currentSlide = (currentSlide + 1) % slideCount;
    slideImage(currentSlide);
}

function prevSlide() {
    // console.log('prevslide')
    currentSlide = (currentSlide - 1) % slideCount;
    slideImage(currentSlide);
}

setInterval(nextSlide, 5000);