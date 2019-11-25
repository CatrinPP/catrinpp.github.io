var link = document.querySelector(".writeus-link");
var popup = document.querySelector(".modal-write-us");
var close = document.querySelector(".modal-close");
var username = document.querySelector(".writeus-username");
var email = document.querySelector(".writeus-usermail");
var message = document.querySelector(".writeus-text");

var mapLink = document.querySelector(".map");
var mapPopup = document.querySelector(".modal-map");
var mapClose = mapPopup.querySelector(".modal-close");


var deliverySlider = document.querySelector(".delivery");
var deliverySliderLink = document.querySelector(".delivery-slider");
var warrantySlider = document.querySelector(".warranty");
var warrantySliderLink = document.querySelector(".warranty-slider");
var creditSlider = document.querySelector(".credit");
var creditSliderLink = document.querySelector(".credit-slider");


// Модальное окно
link.addEventListener("click", function(evt){
  evt.preventDefault();
  popup.classList.add("modal-show");
  username.focus();
});

close.addEventListener("click", function(evt){
  evt.preventDefault();
  popup.classList.remove("modal-show");
  popup.classList.remove("modal-error");
});

popup.addEventListener("submit", function(evt){
  if (!username.value || !email.value || !message.value){
    evt.preventDefault();
    popup.classList.remove("modal-error");
    popup.offsetWidth = popup.offsetWidth;
    popup.classList.add("modal-error");
  }
});

window.addEventListener("keydown", function(evt){
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")){
      evt.preventDefault();
      popup.classList.remove("modal-show");
      popup.classList.remove("modal-error");
    }
  }
});

//Карта
mapLink.addEventListener("click", function(evt){
  evt.preventDefault();
  mapPopup.classList.add("modal-show");
});

mapClose.addEventListener("click", function(evt){
  evt.preventDefault();
  mapPopup.classList.remove("modal-show");
});

window.addEventListener("keydown", function(evt){
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-show")){
      evt.preventDefault();
      mapPopup.classList.remove("modal-show");
    }
  }
});

//Слайдер сервисов
warrantySliderLink.addEventListener("click", function(evt){
  evt.preventDefault();
  deliverySlider.classList.remove("slider-show");
  creditSlider.classList.remove("slider-show");
  warrantySlider.classList.add("slider-show");
  deliverySliderLink.classList.remove("slider-button-active");
  creditSliderLink.classList.remove("slider-button-active");
  warrantySliderLink.classList.add("slider-button-active");
});

creditSliderLink.addEventListener("click", function(evt){
  evt.preventDefault();
  deliverySlider.classList.remove("slider-show");
  warrantySlider.classList.remove("slider-show");
  creditSlider.classList.add("slider-show");
  warrantySliderLink.classList.remove("slider-button-active");
  deliverySliderLink.classList.remove("slider-button-active");
  creditSliderLink.classList.add("slider-button-active");
});

deliverySliderLink.addEventListener("click", function(evt){
  evt.preventDefault();
  warrantySlider.classList.remove("slider-show");
  creditSlider.classList.remove("slider-show");
  deliverySlider.classList.add("slider-show");
  warrantySliderLink.classList.remove("slider-button-active");
  creditSliderLink.classList.remove("slider-button-active");
  deliverySliderLink.classList.add("slider-button-active");
});
