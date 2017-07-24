let index = 1;

function plusIndex(n) {
    index = index + n;
    showImage(index);
}

function showImage(n) {
    let i;
    let x = document.getElementsByClassName("sliders");
    if (n > x.length) { index = 1 };
    if (n < 1) { index = x.length };
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    x[index - 1].style.display = "block";
}

autoSlide();

function autoSlide() {
    let i;
    let x = document.getElementsByClassName("sliders");
    for (i = 0; i < x.length; i++) {
        x[i].style.display = "none";
    }
    if (index > x.length) { index = 1 };
    x[index - 1].style.display = "block";
    index++;
    setTimeout(autoSlide, 2000);
}