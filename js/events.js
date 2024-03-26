/*
gsap.set('.cursor',{xPercent:-50, yPercent: -50})

let cursor = document.querySelector('.cursor')
let hand = document.querySelector('.hand')

let mouseX;
let mouseY;

window.addEventListener('mousemove', e => {
    mouseX = e.clientX;
    mouseY = e.clientY;

    gsap.to(cursor, 0.5, {x: mouseX, y:mouseY})
})
*/

const cursor = document.querySelector(".cursor");
(mouseX = 0), (mouseY = 0), (posX = 0), (posY = 0);

document.addEventListener("mousemove", (e) => {
  cursor.style.cssText = "left: " + e.clientX + "px; top: " + e.clientY + "px;";
});