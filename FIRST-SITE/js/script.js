const popup = document.querySelector('.section-form');
const buttonOpen = document.querySelector('.column__button');
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
















    const titles = {
    brown: "THE OOH NOO COLLECTION",
    pink: "HELLO, WORLD!!!",
    green: "DIRECT LINE DIGITAL",
    red: "DONE!!!!! DONE!!!!"
    }
    
    const colors = {
    brown: "#EEE4DB",
    pink: "rgba(255,0,240,0.7)",
    green: "rgba(15, 255, 115,0.7)",
    red: "rgba(192, 105, 255, 0.7)"
    }

    const numbers = {
    brown: "01",
    pink: "02",
    green: "03",
    red: "04"
    }

    const form = document.getElementById("control")
    const title = document.getElementById("title")
    const section = document.getElementById("banner")
    const num = document.getElementById("numberjs")
    
    
    form.addEventListener('change', changeBlock)
    
    function changeBlock(event) {
    
    let newValues = event.target.dataset.value
    title.textContent = `${titles[newValues]}`
    banner.style.background = `${colors[newValues]}`
    numberjs.textContent = `${numbers[newValues]}`
    
    }



/* ----------------  THE OOH NOO COLLECTION SECTION --------------  */


/*

const page = document.querySelector('.explore-ul-1');

const one = document.querySelector('.rec-one');
const two = document.querySelector('.rec-two');
const tree = document.querySelector('.rec-tree');
const fourth = document.querySelector('.rec-fourth');


one.addEventListener('click', function() {
    page.classList.add('explore-ul-1');
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

*/
/*
const titles = {
    brown: "THE OOH NOO COLLECTION",
    pink: "YOU DON'T MESS WITH THE ZOHAN",
    green: "FUCK THE POLICE",
    red: "GET READY, SUKA!!!!!!!!!"
}


const colors = {
    brown: "brown",
    pink: "rgba(255,0,240,0.7)",
    green: "green",
    red: "red"
}

const form = document.getElementById("form")
const title = document.getElementById("form__title")
const section = document.querySelector(".section")


form.addEventListener('change', changeBlock)

function changeBlock(event) {

    let newValues = event.target.dataset.value
    title.textContent = ${titles[newValues]}
    section.style.background = ${colors[newValues]}

}




/* ----------------  THE OOH NOO COLLECTION SECTION --------------  */



