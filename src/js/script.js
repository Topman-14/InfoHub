const mainNavbar = document.querySelector('#main-navbar');

var prevScrollpos = window.pageYOffset;

window.onscroll = ()=>{
    var currentScrollPos = window.pageYOffset;
    if (prevScrollpos > currentScrollPos) {
        mainNavbar.style.top = "0";
    } 
    else {
        mainNavbar.style.top = "-50px";
    }
      prevScrollpos = currentScrollPos;
}

document.querySelectorAll('.nav-link').forEach(link =>{
   if (link.href === window.location.href){
    link.setAttribute('aria-current', 'page') }
})

const catArray = ["sports", "technology", "science", "business","entertainment", "politics", "environment", "health", "food"];


let randomCategories = catArray.sort(() => 0.5 - Math.random()).slice(0, 5).join();

async function logJSONData() {
    const response = await fetch(`https://newsdata.io/api/1/news?apikey=pub_18736014726a2dfc2ea4b7fccb38bd90918ed&category=${randomCategories}&language=en`);
    const jsonData = await response.json();
    let imgResults = jsonData.results.filter((item)=> item.image_url != null );
    let topPicks;
    
    async function getFiveImg(){
        if(imgResults.length < 5){
            let nxtPage = jsonData.nextPage
            let r = await fetch(`https://newsdata.io/api/1/news?apikey=pub_18736014726a2dfc2ea4b7fccb38bd90918ed&category=sports,technology,science,business,entertainment&language=en&page=${nxtPage}`);
            let jsonData2 = await r.json();
            nxtPage = jsonData2.nextPage;
            let imgResults2 = jsonData2.results.filter((item)=> item.image_url != null );
            imgResults.push(...imgResults2);
            getFiveImg()
        }
        else{
                //i wanted to map this, but i had already specified distinct id's for each a tag, and i'm lazy.
                topPicks = 
                `<a href="src/html/reader.html" id="t-1st" style="background:url(${imgResults[0].image_url}) no-repeat 50%/cover; animation: none;">
                <p class="news-tag">${imgResults[0].category}</p>
                <p class="news-header">${imgResults[0].description.slice(0, 50) + "..."}</p>
                </a>
                <a href="src/html/reader.html" id="t-2nd" style="background:url(${imgResults[1].image_url}) no-repeat 50%/cover; animation: none;">
                <p class="news-tag">${imgResults[1].category}</p>
                <p class="news-header">${imgResults[1].description.slice(0, 150) + "..."}</p>
                
                </a>
                <a href="src/html/reader.html" id="t-3rd" style="background:url(${imgResults[2].image_url}) no-repeat 50%/cover; animation: none;">
                <p class="news-tag">${imgResults[2].category}</p>
                <p class="news-header">${imgResults[2].description.slice(0, 50) + "..."}</p>
                </a>
                <a href="src/html/reader.html" id="t-4th" style="background:url(${imgResults[3].image_url}) no-repeat 50%/cover; animation: none;">
                <p class="news-tag">${imgResults[3].category}</p>
                <p class="news-header">${imgResults[3].description.slice(0, 100) + "..."}</p>
                </a>
                <a href="src/html/reader.html" id="t-5th" style="background:url(${imgResults[4].image_url}) no-repeat 50%/cover; animation: none;">
                <p class="news-tag" >${imgResults[4].category}</p>
                <p class="news-header">${imgResults[4].description.slice(0, 100) + "..."}</p>
                </a>`
        }
    }
    getFiveImg();
    console.log(imgResults);
    setTimeout(() => {
        document.getElementById('news-grid').innerHTML = topPicks;
    }, 1500);
  }
logJSONData();


