const navbar = document.querySelector('nav');
const cursor = document.querySelector('.cursor');

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

document.addEventListener('mousemove', (e) => {
    cursor.style.left = e.pageX + 'px';
    cursor.style.top = e.pageY + 'px';
})

document.addEventListener('mousedown', () => {
    cursor.style.transform= 'scale(2)';
})

document.addEventListener('mouseup', () => {
    cursor.style.transform= 'scale(1)';
})