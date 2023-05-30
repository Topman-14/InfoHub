import {config} from "./config.js";
const api_key = config.APP_ID;

const catArray = ["technology", "science", "business", "politics", "environment", "health", "food", "environment", "News", "sports"];
let randomCategories = catArray.sort(() => 0.5 - Math.random()).slice(0, 2).join("%20AND%20");

async function logJSONData() {
    const response = await fetch(`https://newsdata.io/api/1/news?apikey=${api_key}&q=${randomCategories}&language=en`);
    const jsonData = await response.json();
    console.log(jsonData)
    let imgResults = jsonData.results.filter((item)=> item.image_url != null );
    let topPicks;
    
    async function getFiveImg(){
        if(imgResults.length < 5){
            let nxtPage = jsonData.nextPage
            let r = await fetch(`https://newsdata.io/api/1/news?apikey=${api_key}&q=${randomCategories}&language=en&page=${nxtPage}`);
            let jsonData2 = await r.json();
            nxtPage = jsonData2.nextPage;
            let imgResults2 = jsonData2.results.filter((item)=> item.image_url != null );
            imgResults.push(...imgResults2);
            getFiveImg()
        }
        else{
            topPicks =  imgResults.slice(0, 5).map(item =>{
                return `<div class="scale-wrapper"><div class="news-cards" style="background: linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.244), black), url(${item.image_url}) no-repeat 50%/cover; animation: none;"><p class="news-tag">${item.category}</p><p class="news-title">${item.title}</p></div></div>`
            }).join(" ");
            console.log(topPicks);
            document.getElementById('news-grid').innerHTML = topPicks;
            const cards = document.getElementsByClassName('news-cards');
            for (let i = 0; i < cards.length; i++) {
                cards[i].addEventListener('click', ()=>{
                    window.open(`${imgResults.slice(0, 5)[i].link}`);
                });
                cards[i].addEventListener('mouseover', ()=> {cards[i].style.animation = 'scalebg 16s';})
                cards[i].addEventListener('mouseout', ()=> {cards[i].style.animation = 'none';})
            }
        }
    }
    getFiveImg();
  }
  function openReader(){
    location.href = "src/html/index.html"
    console.log("working")
}


logJSONData();

console.log(randomCategories)
