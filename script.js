/* ===== Переменные ===== */
const body = document.querySelector('body'),
    sidebar = body.querySelector('nav'),
    toggle = body.querySelector(".toggle"),
    searchBtn = body.querySelector(".search-box"),
    modeSwitch = body.querySelector(".toggle-switch"),
    mobiletoggle = body.querySelector(".mobile-toggle"),
    general = body.querySelector(".general"),
    closemobile = body.querySelector(".close_mobile"),
    modeText = body.querySelector(".mode-text");

/* =========================== */

/* ===== Переключение бокового меню на закрытое или открытое ===== */
toggle.addEventListener("click" , () =>{
    sidebar.classList.toggle("close");
})
/* =========================== */

/* ===== Быстрое перемещение в начало ===== */
var t;
function up() {
    console.log("dasds")
	var top = Math.max(document.body.scrollTop,document.documentElement.scrollTop);
	if(top > 0) {
		window.scrollBy(0,-30);
		t = setTimeout('up()',1);
	} else clearTimeout(t);
	return false;
}
/* =========================== */

/* ===== Переключение бокового меню на закрытое или открытое в мобильной версии ===== */
var x = window.matchMedia("(max-width: 850px)")
function myFunction(x) {
    if (x.matches) {
        sidebar.classList.add("mobile-close");
        sidebar.classList.remove("mobile-open");

        mobiletoggle.addEventListener("click", () =>{
            
            sidebar.classList.remove("close");
            sidebar.classList.remove("mobile-close");
            sidebar.classList.add('mobile-open');

            closemobile.addEventListener("click" , () =>{
                sidebar.classList.remove("mobile-open");  
                sidebar.classList.add("mobile-close");   
            })

                general.addEventListener("click" , () =>{
                sidebar.classList.remove("mobile-open");  
                sidebar.classList.add("mobile-close");
            })
        }) 
       

    } 

    else {
        sidebar.classList.remove("mobile-close");
        sidebar.classList.remove("mobile-open");
    }
    }
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


