const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
let incrSlide = 1;
const images = document.querySelectorAll('.images');
const length = images.length;

const nextSlide = () => {
    slider.style.transform = `translateX(-${incrSlide * 800}px)`;
    
    incrSlide++;
}
const firstSlide = () => {
    slider.style.transform = `translateX(-0px)`;
    incrSlide = 1;
}

const backSlide = () => {
    slider.style.transform = `translateX(-${(incrSlide-2)*800}px)`;
    incrSlide--;
}

const lastSlide = () => {
    slider.style.transform = `translateX(-${(length-1)*800}px)`;
    incrSlide = length;
}

right.addEventListener('click', () => {
   incrSlide < length ? nextSlide() : firstSlide();
})

left.addEventListener('click', () => {
    incrSlide > 1 ? backSlide() : lastSlide();
})

