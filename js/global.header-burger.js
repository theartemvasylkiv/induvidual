export function initBurgerMenu() {
    const burger = document.querySelector('.header__burger');
    const nav = document.querySelector('.header__nav');

    if (burger && nav) {
        burger.addEventListener("click", toggleMenu);
    }

    function toggleMenu() {
        nav.classList.toggle("is-open");
    }
}



