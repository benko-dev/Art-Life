const menuBurger = document.querySelector("#header__burger");
const menu = document.querySelector(".header__info");
const items = document.querySelectorAll(".click");
const headerBg = document.querySelector('.header__logo');

menuBurger.addEventListener("click", () => {
    menuBurger.classList.toggle("active");
    menu.classList.toggle("menu-active");
    headerBg.classList.toggle('bg');
});

for (let index = 0; index < items.length; index++) {
    const el = items[index];
    
    el.addEventListener("click", () =>{
        menuBurger.classList.remove("active");
        menu.classList.remove("menu-active");
    });
}
