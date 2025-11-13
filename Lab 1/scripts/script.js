/*
*Name: Siara Kirk
*File: Chapter 10 Lab
*Date: 11/6/25
*/

/* Hamburger menu function */
function hamburger() {
    var menu = document.getElementById("menu-links");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

