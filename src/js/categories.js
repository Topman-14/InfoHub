import {config} from "./config.js";
const catGrid = document.querySelector('#category-grid');
const catGridItems = document.getElementsByClassName('cat-grid-item');
const categories = [
    {
        'title':'Technology',
        'image':'/assets/images/tech.png',
    },
    {
        'title':'Business',
        'image':'/assets/images/business.png',
    },
    {
        'title':'Tourism',
        'image':'/assets/images/education.png',
    },
    {
        'title':'Entertainment',
        'image':'/assets/images/entertainment.png',
    },
    {
        'title':'World',
        'image':'/assets/images/fashion.png',
    },
    {
        'title':'Food',
        'image':'/assets/images/food.png',
    },
    {
        'title':'Health',
        'image':'/assets/images/health.png',
    },
    {
        'title':'Politics',
        'image':'/assets/images/politics.png',
    },
    {
        'title':'Sports',
        'image':'/assets/images/sports.png',
    },
    {
        'title':'Science',
        'image':'/assets/images/science.png',
    },
    {
        'title':'Environment',
        'image':'/assets/images/environment.png',
    },
    {
        'title':'Random',
        'image':'/assets/images/random.png',
    },
];
const catElements = categories.map(item => {
    return `<div class="cat-grid-item" style="background:url(${item.image}) no-repeat 50%/cover;">
        <p class="cat-text">${item.title}</p>
    </div>`
}).join('');
catGrid.innerHTML = catElements;

for (let i = 0; i < catGridItems.length; i++) {
    catGridItems[i].addEventListener('click', ()=>{
        localStorage.setItem("category", categories[i].title);
        window.open("./category.html");
    });
    
}