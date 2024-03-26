const spoilerBtn = document.querySelector('.aside-button');
const aside = document.querySelector('.articles__aside-wrapper');

spoilerBtn.addEventListener("click", () => {
    spoilerBtn.classList.toggle("aside-spoiler-active");
    aside.classList.toggle("aside-active");
});