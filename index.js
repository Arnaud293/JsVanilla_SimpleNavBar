const navbar = document.querySelector('nav');

let position = 0;

window.addEventListener('scroll', () => {
    if(window.scrollY < position){
        navbar.style.top = 0;
    }
    else {
        navbar.style.top = -60 + 'px';
    }

    position = window.scrollY;
})
