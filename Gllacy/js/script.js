// Слайдер
var background = document.querySelector(".background-wrapper");
var sliderBtn1 = document.querySelector(".slider1-control");
var sliderBtn2 = document.querySelector(".slider2-control");
var sliderBtn3 = document.querySelector(".slider3-control");
var slider1 = document.querySelector(".slider1");
var slider2 = document.querySelector(".slider2");
var slider3 = document.querySelector(".slider3");

// Форма обратной связи
var feedback = document.querySelector(".feedback");
var feedbackLink = document.querySelector(".form-btn");
var feedbackWindow = document.querySelector(".modal");
var modalClose = feedbackWindow.querySelector(".modal-close");
var overlay = document.querySelector(".modal-overlay");
var username = document.querySelector(".username");
var email = document.querySelector(".email");
var message = document.querySelector(".modal-text");


// Слайдер
sliderBtn2.addEventListener("click", function(evt){
  evt.preventDefault();
  sliderBtn2.classList.add("is-active");
  sliderBtn1.classList.remove("is-active");
  sliderBtn3.classList.remove("is-active");
  background.classList.add("blue-background");
  background.classList.remove("green-background");
  background.classList.remove("rose-background");
  slider1.classList.remove("slider-show");
  slider3.classList.remove("slider-show");
  slider2.classList.add("slider-show");
});

sliderBtn3.addEventListener("click", function(evt){
  evt.preventDefault();
  sliderBtn3.classList.add("is-active");
  sliderBtn2.classList.remove("is-active");
  sliderBtn1.classList.remove("is-active");
  background.classList.add("rose-background");
  background.classList.remove("blue-background");
  background.classList.remove("green-background");
  slider2.classList.remove("slider-show");
  slider1.classList.remove("slider-show");
  slider3.classList.add("slider-show");
});

sliderBtn1.addEventListener("click", function(evt){
  evt.preventDefault();
  sliderBtn1.classList.add("is-active");
  sliderBtn2.classList.remove("is-active");
  sliderBtn3.classList.remove("is-active");
  background.classList.add("green-background");
  background.classList.remove("blue-background");
  background.classList.remove("rose-background");
  slider2.classList.remove("slider-show");
  slider3.classList.remove("slider-show");
  slider1.classList.add("slider-show");
});

// Форма обратной связи
  feedbackLink.addEventListener("click", function(evt){
    evt.preventDefault();
    feedbackWindow.classList.add("modal-show");
    feedback.classList.add("feedback-animation");
    // feedback.classList.remove("feedback-animation");
  });

  modalClose.addEventListener("click", function(evt){
    evt.preventDefault();
    feedbackWindow.classList.remove("modal-show");
    feedback.classList.remove("modal-error");
  });

  window.addEventListener("keydown", function(evt){
    if (evt.keyCode === 27) {
      if (feedbackWindow.classList.contains("modal-show")){
        evt.preventDefault();
        feedback.classList.remove("modal-error");
        feedbackWindow.classList.remove("modal-show");
      }
    }
  });

  overlay.addEventListener("click", function(evt){
    evt.preventDefault();
    feedbackWindow.classList.remove("modal-show");
    feedback.classList.remove("modal-error");
  });

  feedbackWindow.addEventListener("submit", function(evt){
    if (!username.value || !email.value || !message.value){
      evt.preventDefault();
      feedback.classList.remove("feedback-animation");
      feedback.classList.remove("modal-error");
      feedback.offsetWidth = feedback.offsetWidth;
      feedback.classList.add("modal-error");
    }
  });
