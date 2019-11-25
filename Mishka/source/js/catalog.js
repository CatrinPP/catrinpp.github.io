//Mobile menu

var navMain = document.querySelector('.main-nav');
var navToggle = document.querySelector('.main-nav__toggle');

navMain.classList.remove('main-nav--nojs');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--closed')) {
    navMain.classList.remove('main-nav--closed');
    navMain.classList.add('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--closed');
    navMain.classList.remove('main-nav--opened');
  }
});

//Popup
var popup = document.querySelector(".popup__form");
var cartLinks = document.querySelectorAll(".card__btn");
var popupWindow = document.querySelector(".popup");
var index;
var link;

for (index = 0; index < cartLinks.length; index++) {
    link = cartLinks[index];
    link.addEventListener('click', clickHandler);
}

function clickHandler(event) {
    event.preventDefault();
    popupWindow.classList.add("popup__show");
}


window.addEventListener("keydown", function(evt){
  if (evt.keyCode === 27) {
    if (popupWindow.classList.contains("popup__show")){
      evt.preventDefault();
      popupWindow.classList.remove("popup__show");
    }
  }
});
