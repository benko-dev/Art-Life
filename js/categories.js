/* Offers list */
let all = document.querySelectorAll('.offer');
let art = document.querySelectorAll('.category-art');
let sculptures = document.querySelectorAll('.category-sculptures');
let streetArt = document.querySelectorAll('.category-street-art');

/* Categoryes list */
let categories = document.querySelectorAll('.categories__label');

function changeCategory(btn) {
    for (let i = 0; i < categories.length; i++) {
        const el = categories[i];
        
        el.classList.remove('category-active');
    }
    btn.classList.add('category-active');
};
function showOffers() {
    for (let i = 0; i < all.length; i++) {
        const el = all[i];
        
        el.classList.remove('none');
    }
}
function hideOffers(category) {
    for (let i = 0; i < all.length; i++) {
        const el = all[i];
        
        el.classList.add('none');
    }
    for (let i = 0; i < category.length; i++) {
        const el = category[i];
        
        el.classList.remove('none');
    }
}

window.addEventListener("click", (event) => {
    if(event.target.dataset.action === 'item') {
        changeCategory(event.target);

        if (event.target.dataset.category === 'art') {
            hideOffers(art);
        } else if (event.target.dataset.category === 'sculptures') {
            hideOffers(sculptures);
        } else if (event.target.dataset.category === 'streetArt') {
            hideOffers(streetArt);
            //console.log("Work!");
        } else {
            showOffers();
        }
    }
});
