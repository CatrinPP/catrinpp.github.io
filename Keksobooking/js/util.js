'use strict';

(function () {
  var ENTER_KEYCODE = 13;
  var ESC_KEYCODE = 27;

  var main = document.querySelector('main');
  var errorTemplate = document.querySelector('#error').content.querySelector('.error');
  var errorMessage;

  window.util = {
    main: main,
    isEnterEvent: function (evt, action) {
      if (evt.keyCode === ENTER_KEYCODE) {
        action();
      }
    },
    isEscEvent: function (evt, action) {
      if (evt.keyCode === ESC_KEYCODE) {
        action();
      }
    },
    showErrorMessage: function () {
      errorMessage = errorTemplate.cloneNode(true);
      main.appendChild(errorMessage);
      var errorBtn = errorMessage.querySelector('.error__button');

      var onEscPress = function (evt) {
        window.util.isEscEvent(evt, function () {
          main.removeChild(errorMessage);
          document.removeEventListener('keydown', onEscPress);
        });
      };

      document.addEventListener('keydown', onEscPress);

      errorMessage.addEventListener('click', function (evt) {
        var text = errorMessage.querySelector('.error__message');
        if (evt.target === errorBtn || evt.target !== text) {
          main.removeChild(errorMessage);
        }
        document.removeEventListener('keydown', onEscPress);
      });
    }
  };
})();
