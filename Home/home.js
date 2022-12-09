const slideshow = document.querySelectorAll("#imagens .slideshow");

const delay = 3000;

var currentimage = 0;

slideshow[currentimage].style.opacity=1;

setInterval(proximaimagem, delay);

function proximaimagem ()
{
    slideshow[currentimage].style.zIndex = -2;
    slideshow[currentimage].style.opacity=0;
    currentimage = (currentimage + 1) % slideshow.length;
    slideshow[currentimage].style.opacity=1;
    slideshow[currentimage].style.zIndex = -1;
}