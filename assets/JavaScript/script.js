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
