// the code below is for slider 
const sliderElem = document.querySelector('.slider');
let count = 1;
setInterval(() => {
    count++;
    if (count <= 4) {
        sliderElem.style.backgroundImage = `url('/img/slider${count}.jpg')`;
    }
    else {
        count = 1;
        sliderElem.style.backgroundImage = `url('/img/slider1.jpg')`;
    }
}, 3000)

