const catGrid = document.querySelector('#category-grid')
const categories = [
    {
        'title':'Tech',
        'image':'/assets/images/tech.png',
    },
    {
        'title':'Business',
        'image':'/assets/images/business.png',
    },
    {
        'title':'Education',
        'image':'/assets/images/education.png',
    },
    {
        'title':'Entertainment',
        'image':'/assets/images/entertainment.png',
    },
    {
        'title':'Fashion',
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
        'title':'Tech',
        'image':'/assets/images/tech.png',
    },
    {
        'title':'Tech',
        'image':'/assets/images/tech.png',
    },
    {
        'title':'Tech',
        'image':'/assets/images/tech.png',
    },
]

const catElements = categories.map(item => {
    return `<div class="cat-grid-item" style="background:url(${item.image}) no-repeat 50%/cover;">
        <p class="cat-text">${item.title}</p>
    </div>`
}).join('')

catGrid.innerHTML = catElements;