/* ===== Переменные ===== */
const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    mobiletoggle = body.querySelector(".mobile-toggle"),
    general = body.querySelector(".general"),
    modeText = body.querySelector(".mode-text");
/* =========================== */

/* ===== Переключение бокового меню на закрытое или открытое ===== */
toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})
/* =========================== */

/* ===== Переключение бокового меню на закрытое или открытое в мобильной версии ===== */
function myFunction(x) {
    if (x.matches) {
        sidebar.classList.add("mobile-close");
        sidebar.classList.remove("mobile-open");
        mobiletoggle.addEventListener("click" , () =>{
            sidebar.classList.remove("close");
            sidebar.classList.add('mobile-open');
            general.addEventListener("click" , () =>{
                sidebar.classList.remove("mobile-open");  
                
            }) 
        }) 

    } 
    else {
        sidebar.classList.remove("mobile-close");
    }
    }
    
    var x = window.matchMedia("(max-width: 800px)")
    myFunction(x) 
    x.addListener(myFunction)
    /* ===========================*/

    /* ===== Поиск ===== */ 
    searchBtn.addEventListener("click" , () =>{
    sidebar.classList.remove("close");}) 
    /* =========================== */

    /* ===== Переключение темы ===== */
    modeSwitch.addEventListener("click" , () =>{
    body.classList.toggle("dark");

    if(body.classList.contains("dark")){
        modeText.innerText = "Светлая тема";
    }
    else{
        modeText.innerText = "Тёмная тема";
    }});
    /* =========================== */


