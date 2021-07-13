import navBar from "./events/navbar.js";

const d = document;
const w = window;

d.addEventListener('DOMContentLoaded',(e)=>{
    navBar('.a-menu','#button-menu','.menu-box','.flecha-change');
})