let menuBtn = document.querySelector('.menu-btn');
let menu = document.querySelector('.links');

menuBtn.addEventListener('click', () => {
    menu.classList.toggle('active');
});


let up = document.querySelector('.go-up');

window.onscroll = () => {
    menu.classList.remove('active');
    
    if (window.scrollY > 300) {
        up.style.bottom = '3' + 'rem';
    } else {

        up.style.bottom = '-20' + 'rem';
    }
}

up.addEventListener('click', () => {
    window.scroll({
        top: 0,
        let: 0,
        behavior: "smooth",
    });
});