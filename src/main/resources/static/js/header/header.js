const navMenuButton = document.querySelector(".site-nav-menu");
const nav = document.querySelector("nav");

navMenuButton.onmouseover = () => {
    nav.classList.remove("nav-invisible");
}

navMenuButton.onmouseout = () => {
    nav.classList.add("nav-invisible");
}

nav.onmouseover = () => {
    nav.classList.remove("nav-invisible");
}

nav.onmouseout = () => {
    nav.classList.add("nav-invisible");
}