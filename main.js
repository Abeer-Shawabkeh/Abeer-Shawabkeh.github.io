let stars = document.getElementById('stars');
let moon = document.getElementById('moon');
let mountains3 = document.getElementById('mountains3');
let mountains4 = document.getElementById('mountains4');
let river5 = document.getElementById('river5');
let boat6 = document.getElementById('boat6');
let GoldenFlower = document.querySelector('.GoldenFlower');
window.onscroll = function(){
    let value = scrollY;
    stars.style.left = value + 'px';
    moon.style.top = value * 3 + 'px';
    mountains3.style.top = value * 2 + 'px';
    mountains4.style.top = value * 1.5 + 'px';
    river5.style.top = value  + 'px';
    boat6 .style.top = value  + 'px';
    boat6 .style.left = value * 3 + 'px';
    GoldenFlower.style.fontsize = value  + 'px';

}

