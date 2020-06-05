'use strict';

(function () {
  var MIN_Y_COORDINATE = 130;
  var MAX_Y_COORDINATE = 630;

  var onError = function () {
    window.util.showErrorMessage();
  };

  var onSuccess = function (data) {
    window.map.places = data;
    window.filter.filterPins();
    window.map.activateMap();
  };

  var activatePage = function () {
    window.form.enableFormElements();
    window.backend.load('https://javascript.pages.academy/keksobooking/data', onSuccess, onError);
    window.filter.form.style.display = 'flex';
    window.form.activateAdForm();
    window.form.fillAddress(window.map.mainPin.offsetLeft + Math.round(window.map.mainPin.offsetWidth / 2), window.map.mainPin.offsetTop + window.map.mainPin.offsetHeight);
  };

  var deactivatePage = function () {
    window.form.clearForm();
    window.filter.clearFilter();
    window.form.disableFormElements();
    window.map.pinsDiv.innerHTML = '';
    window.map.disactivateMap();
    window.filter.form.style.display = 'none';
    window.form.disactivateAdForm();
    window.map.mainPin.style.top = (window.map.mainPinInitY - window.map.mainPin.offsetHeight) + 'px';
    window.map.mainPin.style.left = window.map.mainPinInitX - Math.round(window.map.mainPin.offsetWidth / 2) + 'px';
    window.form.fillAddress(window.map.mainPinInitX, window.map.mainPinInitY);
  };

  var checkPinCoordinates = function (element, area) {
    if (element.offsetTop + element.offsetHeight < MIN_Y_COORDINATE) {
      element.style.top = MIN_Y_COORDINATE - element.offsetHeight + 'px';
    } else if (element.offsetTop + element.offsetHeight > MAX_Y_COORDINATE) {
      element.style.top = MAX_Y_COORDINATE - element.offsetHeight + 'px';
    }
    if (element.offsetLeft + element.clientWidth / 2 < area.clientLeft) {
      element.style.left = area.clientLeft - element.clientWidth / 2 + 'px';
    } else if (element.offsetLeft + element.clientWidth / 2 > area.clientWidth + area.clientLeft) {
      element.style.left = area.clientWidth + area.clientLeft - element.clientWidth / 2 + 'px';
    }
  };

  window.form.fillAddress(window.map.mainPinInitX, window.map.mainPinInitY);
  window.form.disableFormElements();

  window.map.mainPin.addEventListener('mousedown', function (evt) {
    if (window.map.mapBlock.classList.contains('map--faded')) {
      activatePage();
    }
    evt.preventDefault();

    var startCoords = {
      x: evt.clientX,
      y: evt.clientY
    };

    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();

      dragged = true;

      var shift = {
        x: startCoords.x - moveEvt.clientX,
        y: startCoords.y - moveEvt.clientY
      };

      startCoords = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      window.map.mainPin.style.top = (window.map.mainPin.offsetTop - shift.y) + 'px';
      window.map.mainPin.style.left = (window.map.mainPin.offsetLeft - shift.x) + 'px';

      window.form.fillAddress(window.map.mainPin.offsetLeft + Math.round(window.map.mainPin.offsetWidth / 2) - shift.x, window.map.mainPin.offsetTop + window.map.mainPin.offsetHeight - shift.y);
      checkPinCoordinates(window.map.mainPin, window.map.mapBlock);
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();
      window.form.fillAddress(window.map.mainPin.offsetLeft + Math.round(window.map.mainPin.offsetWidth / 2), window.map.mainPin.offsetTop + window.map.mainPin.offsetHeight);

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);

      if (dragged) {
        var onClickPreventDefault = function (evnt) {
          evnt.preventDefault();
          window.map.mainPin.removeEventListener('click', onClickPreventDefault);
        };
        window.map.mainPin.addEventListener('click', onClickPreventDefault);

      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  });

  window.map.mainPin.addEventListener('keydown', function (evt) {
    window.util.isEnterEvent(evt, activatePage);
  });

  window.launch = {
    deactivatePage: deactivatePage,
  };
})();
