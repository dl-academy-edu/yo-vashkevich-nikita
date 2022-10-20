const popup = document.querySelector('.section__form');
const buttonOpen = document.querySelector('.btn-js');
const buttonClose = document.querySelector('.popup-close');

buttonOpen.addEventListener('click', function() {
    popup.classList.add('open');
})

buttonClose.addEventListener('click', function() {
    popup.classList.remove('open');
})

window.addEventListener('keydown', function(event) {
    if (event.code === "Escape" && popup.classList.contains('open')) {
        popup.classList.remove('open');
    }
})






/* ----------------  THE OOH NOO COLLECTION SECTION --------------  */

const page = document.querySelector('.explore-ul');

const one = document.querySelector('.rec-one');
const two = document.querySelector('.rec-two');
const tree = document.querySelector('.rec-tree');
const fourth = document.querySelector('.rec-fourth');


one.addEventListener('click', function() {
    page.classList('explore-ul');
})

two.addEventListener('click', function() {
    page.classList.add('explore-two');
})

tree.addEventListener('click', function() {
    page.classList.add('explore-tree');
})

fourth.addEventListener('click', function() {
    page.classList.add('explore-fourth');
})


/* ----------------  THE OOH NOO COLLECTION SECTION --------------  */