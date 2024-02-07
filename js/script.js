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
toggle.addEventListener("click", () => {
		sidebar.classList.toggle("close");
	})
	/* =========================== */

/* ===== Быстрое перемещение в начало ===== */
var t;

function up() {
	console.log("dasds")
	var top = Math.max(document.body.scrollTop, document.documentElement.scrollTop);
	if (top > 0) {
		window.scrollBy(0, -30);
		t = setTimeout('up()', 1);
	} else clearTimeout(t);
	return false;
}
/* =========================== */

/* ===== Переключение бокового меню на закрытое или открытое в мобильной версии ===== */
var x = window.matchMedia("(max-width: 800px)")

function myFunction(x) {
	if (x.matches) {
		sidebar.classList.add("mobile-close");
		sidebar.classList.remove("mobile-open");

		mobiletoggle.addEventListener("click", () => {

			sidebar.classList.remove("close");
			sidebar.classList.remove("mobile-close");
			sidebar.classList.add('mobile-open');

			closemobile.addEventListener("click", () => {
				sidebar.classList.remove("mobile-open");
				sidebar.classList.add("mobile-close");
			})

			general.addEventListener("click", () => {
				sidebar.classList.remove("mobile-open");
				sidebar.classList.add("mobile-close");
			})
		})


	} else {
		sidebar.classList.remove("mobile-close");
		sidebar.classList.remove("mobile-open");
	}
}
myFunction(x)
x.addListener(myFunction)
	/* ===========================*/

/* ===== Поиск ===== */

searchBtn.addEventListener("click", () => {
		sidebar.classList.remove("close");
	})
	/* =========================== */

/* ===== Переключение темы ===== */


function toggleDark() {
  if (body.classList.contains('dark')) {
    body.classList.remove('dark');
    localStorage.setItem("theme", "light");
    modeText.innerText = "Светлая тема";
  } else {
    body.classList.add('dark');
    localStorage.setItem("theme", "dark");
		modeText.innerText = "Тёмная тема";
  }
}

if (localStorage.getItem("theme") === "dark") {
  body.classList.add('dark');
  modeText.innerText = "Тёмная тема";
}

document.querySelector('.toggle-switch').addEventListener('click', toggleDark);


/* =========================== */

/* ===== Кнопка вверх ===== */
var btn = $('#button');

$(window).scroll(function() {
  if ($(window).scrollTop() > 300) {
    btn.addClass('show');
  } else {
    btn.removeClass('show');
  }
});


btn.on('click', function(e) {
  e.preventDefault();
  $('html, body').animate({scrollTop:1}, '300');
});


$(function() {

$(".types__row").mixItUp();

var inputText;
var $matching = $();

// Delay function
var delay = (function(){
	var timer = 0;
	return function(callback, ms){
	clearTimeout (timer);
	timer = setTimeout(callback, ms);
	};
})();

$("#input_sr").keyup(function(){
	// Delay function invoked to make sure user stopped typing
	delay(function(){
	inputText = $("#input_sr").val().toLowerCase();
	
	// Check to see if input field is empty
	if ((inputText.length) > 0) {            
	$( '.mix').each(function() {
		$this = $("this");
		
			// add item to be filtered out if input text matches items inside the title   
			if($(this).children('.search_object').text().toLowerCase().match(inputText)) {
			$matching = $matching.add(this);
		}
		else {
			// removes any previously matched item
			$matching = $matching.not(this);
		}
		});
		$(".types__row").mixItUp('filter', $matching);
	}

	else {
		// resets the filter to show all item if input is empty
		$(".types__row").mixItUp('filter', 'all');
	}
	}, 200 );
});
})
