const menu = document.querySelector(".menu");
const links = document.querySelectorAll(".menu li a");
const faBars = document.querySelector(".fa-bars");

faBars.addEventListener("click", function () {
    menu.classList.toggle("menu_show");
});

links.forEach((link) => {
    link.addEventListener("click", function (){
        menu.classList.toggle("menu_show");
    });
});