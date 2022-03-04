function scrollTopo() {
    window.scrollTo ({
        top: 0,
        behavior:'smooth'
    });
}
function subirScroll() {
    if(window.scrollY === 0) {
        document.querySelector('.button-scroll').style.display = 'none';
    } else {
        document.querySelector('.button-scroll').style.display = '';
    }
}

window.addEventListener('scroll', subirScroll);


function navMenu() {
    let menuMobile = document.querySelector('nav');

   if(menuMobile.style.display == 'flex') {
       menuMobile.style.display = 'none';
   } else {
       menuMobile.style.display = 'flex';
   }
}