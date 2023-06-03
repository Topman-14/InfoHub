const mainNavbar = document.querySelector('#main-navbar');
const menuBtn = document.querySelector('#menu_close');
const mobileMenu = document.querySelector('#menu');
var prevScrollpos = window.pageYOffset;
menuBtn.addEventListener('click', ()=>{
    menuBtn.style.opacity = '0'
    mobileMenu.style.display = 'flex'
    mobileMenu.style.animation = 'slide-out 0.7s'
})
mobileMenu.addEventListener('click', ()=>{
    mobileMenu.style.animation = 'slide-in 0.7s'
    menuBtn.style.opacity = '1';
    setTimeout(()=>{
        mobileMenu.style.display = 'none';
    }, 650)
})

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