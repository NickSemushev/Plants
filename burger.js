const burgerMunu = document.querySelector(".header__nav__menu");
const burgerMunuBtn = document.querySelector(".burger__btn");
const menuItems = document.querySelectorAll(".header__nav__menu__item");
const burgerSpans = document.querySelectorAll(".burger__btn__span");
const body = document.querySelector(".body");

function hendleMenu() {
    burgerMunu.classList.toggle("header__nav__menu-active");
    body.classList.toggle("no-scroll");
    burgerSpans.forEach((span, index) => {
        span.classList.toggle(`burger__btn__span-active-${index + 1}`);
    });
}

function closeMenu() {
    burgerMunu.classList.remove("header__nav__menu-active");
    body.classList.remove("no-scroll");
    burgerSpans.forEach((span, index) => {
        span.classList.remove(`burger__btn__span-active-${index + 1}`);
    });
}

function menuButton() {
    burgerMunuBtn.classList.toggle("burger__btn__span-active");
}

burgerMunuBtn.addEventListener("click", menuButton);

burgerMunuBtn.addEventListener("click", hendleMenu);

menuItems.forEach(item => {
    item.addEventListener("click", closeMenu);
});