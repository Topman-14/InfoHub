import {config} from "./config.js";
let api_key = config.APP_ID;
const banner = document.querySelector('#banner');
const triNewsWrapper = document.querySelector('#tri_news_wrapper');
const sideNewsWrapper = document.querySelector('#side_news_wrapper');
const newsTiles = document.getElementsByClassName('news_tile');


const pickedCategory = localStorage.getItem("category");
const pageHeader = document.querySelector('#page_header');
pageHeader.textContent = `${(pickedCategory == "Technology")? "Tech" : pickedCategory} News`;
document.title = `InfoHub | ${(pickedCategory == "Technology")? "Tech" : pickedCategory} News`;

async function logJSONData() {
    let response;
    try{
         response = await fetch(`https://newsdata.io/api/1/news?apikey=${api_key}&category=${(pickedCategory == "Random")? "top": pickedCategory}&language=en`);
    } catch{
        api_key = config.APP_ID2;
        try {
            response = await fetch(`https://newsdata.io/api/1/news?apikey=${api_key}&category=${(pickedCategory == "Random")? "top": pickedCategory}&language=en`);
        }catch{
            api_key = config.APP_ID3;
            response = await fetch(`https://newsdata.io/api/1/news?apikey=${api_key}&category=${(pickedCategory == "Random")? "top": pickedCategory}&language=en`); 
        }
    }
    console.log(api_key)
    const jsonData = await response.json();
    let imgResults = jsonData.results.filter((item)=> item.image_url != null );
    let nonImgResults = jsonData.results.filter((item)=> item.image_url == null );
    let pageContent;
    
    async function getFourImg(){
    if(imgResults.length < 4 || nonImgResults.length < 5){
        let nxtPage = jsonData.nextPage;
        let r = await fetch(`https://newsdata.io/api/1/news?apikey=${api_key}&category=${(pickedCategory == "Random")? "top": pickedCategory}&language=en&page=${nxtPage}`);
        console.log(api_key);
        let jsonData2 = await r.json();
        
        nxtPage = jsonData2.nextPage;
        let imgResults2 = jsonData2.results.filter((item)=> item.image_url != null );
        imgResults.push(...imgResults2);
        let nonImgResults2 = jsonData2.results.filter((item)=> item.image_url == null );
        nonImgResults.push(...nonImgResults2);
        getFourImg()
    }
    else{
        pageContent = [...(imgResults.slice(0, 4)), ...(nonImgResults.slice(0, 5))];
        banner.style.background = `linear-gradient(to bottom, transparent, rgba(0, 0, 0, 0.244), black), url(${pageContent[0].image_url}) no-repeat 50%/cover`;
        banner.style.animation = `none`;
        document.querySelector('#banner_news_title').textContent = `${pageContent[0].title}`;

        triNewsWrapper.innerHTML = pageContent.slice(1, 4).map(item => `<div class="news_tile" style="background:white;">
        <img src="${item.image_url}" alt="${item.title}" />
        <p class="tri_news_title">${(item.title.length >= 91)? (item.title.slice(0, 90) + "...") : item.title}</p></div>`).join(" ");

        sideNewsWrapper.innerHTML = pageContent.slice(4, 9).map(item => `<div class="news_tile" style="background:white;"><p class="side_news_title">${(item.title.length >= 110)? (item.title.slice(0, 109) + "...") : item.title}</p></div>`).join(" ");

        for (let i = 0; i < newsTiles.length; i++) {
            newsTiles[i].addEventListener("click", ()=>{
                window.open(`${pageContent[i].link}`);
            })
            
        }
    }
    }
    getFourImg();
}
logJSONData();
