const catGrid = document.querySelector('#category-grid');
const catGridItems = document.getElementsByClassName('cat-grid-item');
const categories = [
    {
        'title':'Technology',
        'image':'/src/assets/images/tech.png',
    },
    {
        'title':'Business',
        'image':'/src/assets/images/business.png',
    },
    {
        'title':'Tourism',
        'image':'/src/assets/images/education.png',
    },
    {
        'title':'Entertainment',
        'image':'/src/assets/images/entertainment.png',
    },
    {
        'title':'World',
        'image':'/src/assets/images/fashion.png',
    },
    {
        'title':'Food',
        'image':'/src/assets/images/food.png',
    },
    {
        'title':'Health',
        'image':'/src/assets/images/health.png',
    },
    {
        'title':'Politics',
        'image':'/src/assets/images/politics.png',
    },
    {
        'title':'Sports',
        'image':'/src/assets/images/sports.png',
    },
    {
        'title':'Science',
        'image':'/src/assets/images/science.png',
    },
    {
        'title':'Environment',
        'image':'/src/assets/images/environment.png',
    },
    {
        'title':'Random',
        'image':'/src/assets/images/random.png',
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