"use strict";

document.getElementById("logo").addEventListener("mouseover", mouseOver);
document.getElementById("logo").addEventListener("mouseout", mouseOut);

function mouseOver() {
    document.getElementById("logo").style.fontFamily = "Special Elite";
}

function mouseOut() {
    document.getElementById("logo").style.fontFamily = "Montserrat";
}