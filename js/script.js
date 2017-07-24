let index = 0;

function plusIndex(n) {
    index = index + 1;
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