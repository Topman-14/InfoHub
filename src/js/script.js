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
