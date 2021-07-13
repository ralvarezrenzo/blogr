export default function navBar(aMenu, buttonMenu, menuBox,arrowChange){
    const d = document;
        let aMenuBtn= d.querySelectorAll(aMenu)
            aMenuBtn.forEach(aMenuClick =>{
                aMenuClick.addEventListener('click',(e)=>{
                    e.preventDefault();
                    let height = 0;
                    let subMenu = aMenuClick.nextElementSibling;
                    if(subMenu.clientHeight == "0"){
                        height = subMenu.scrollHeight;
                    }
                    subMenu.style.height = `${height}px`
                    let arrow = aMenuClick.children[0];
                    arrow.classList.toggle('arrow-change')
                })
            })
    let btnMenu = d.getElementById(buttonMenu),
        menuBoxAll = d.querySelector(menuBox);
    d.addEventListener('click',(e)=>{
        if(e.target.matches(buttonMenu)||e.target.matches(`${buttonMenu} *`)){
            menuBoxAll.classList.toggle('menu-box--open')
        }
    })
}