import navBar from "./events/navbar.js";

const d = document;

d.addEventListener('DOMContentLoaded',(e)=>{
    navBar('.a-menu','#button-menu','.menu-box','.arrow');
})