'use strict';

(function () {
  var adForm = document.querySelector('.ad-form');
  var resetButton = adForm.querySelector('.ad-form__reset');
  var roomNumberSelect = document.querySelector('#room_number');
  var capacitySelect = document.querySelector('#capacity');
  var address = document.querySelector('#address');
  var adFormElements = document.querySelector('.ad-form').querySelectorAll('fieldset');
  var housingType = document.querySelector('#type');
  var price = document.querySelector('#price');
  var timein = document.querySelector('#timein');
  var timeout = document.querySelector('#timeout');
  var messageTemplate = document.querySelector('#success').content.querySelector('.success');

  var fillAddress = function (x, y) {
    address.value = x + ', ' + y;
  };

  var showSuccessMessage = function () {
    var message = messageTemplate.cloneNode(true);
    window.util.main.appendChild(message);

    var onEscPress = function (evt) {
      window.util.isEscEvent(evt, function () {
        document.removeEventListener('keydown', onEscPress);
        window.util.main.removeChild(message);
      });
    };

    document.addEventListener('keydown', onEscPress);

    message.addEventListener('click', function (evt) {
      var text = message.querySelector('.success__message');
      if (evt.target !== text) {
        window.util.main.removeChild(message);
      }
      document.removeEventListener('keydown', onEscPress);
    });
  };

  var onFormSuccess = function () {
    showSuccessMessage();
    window.launch.deactivatePage();
  };

  var onFormError = function () {
    window.util.showErrorMessage();
    window.launch.deactivatePage();
  };

  var clearForm = function () {
    adForm.querySelector('#title').value = '';
    adForm.querySelector('#title').placeholder = 'Милая, уютная квартирка в центре Токио';
    adForm.querySelector('#description').value = '';
    adForm.querySelector('#description').placeholder = 'Здесь расскажите о том, какое ваше жилье замечательное и вообще';
    housingType.options[1].selected = true;
    price.value = '';
    price.placeholder = '1000';
    price.min = '1000';
    timein.options[0].selected = true;
    timeout.options[0].selected = true;
    roomNumberSelect.options[0].selected = true;
    capacitySelect.options[2].selected = true;
    var checkboxes = adForm.querySelectorAll('input[type=checkbox]:checked');
    checkboxes.forEach(function (item) {
      item.checked = false;
    });
  };

  resetButton.addEventListener('click', function (evt) {
    evt.preventDefault();
    window.launch.deactivatePage();
  });

  roomNumberSelect.addEventListener('change', function () {
    if (roomNumberSelect.options[roomNumberSelect.selectedIndex].value === '2') {
      capacitySelect.options[2].removeAttribute('disabled');
      capacitySelect.options[1].removeAttribute('disabled');
      capacitySelect.options[0].setAttribute('disabled', 'disabled');
      capacitySelect.options[0].selected = false;
      capacitySelect.options[3].setAttribute('disabled', 'disabled');
      capacitySelect.options[3].selected = false;
    } else if (roomNumberSelect.options[roomNumberSelect.selectedIndex].value === '3') {
      capacitySelect.options[2].removeAttribute('disabled');
      capacitySelect.options[1].removeAttribute('disabled');
      capacitySelect.options[0].removeAttribute('disabled');
      capacitySelect.options[3].setAttribute('disabled', 'disabled');
      capacitySelect.options[3].selected = false;
    } else if (roomNumberSelect.options[roomNumberSelect.selectedIndex].value === '100') {
      capacitySelect.options[3].removeAttribute('disabled');
      capacitySelect.options[0].setAttribute('disabled', 'disabled');
      capacitySelect.options[0].selected = false;
      capacitySelect.options[1].setAttribute('disabled', 'disabled');
      capacitySelect.options[1].selected = false;
      capacitySelect.options[2].setAttribute('disabled', 'disabled');
      capacitySelect.options[2].selected = false;
    } else if (roomNumberSelect.options[roomNumberSelect.selectedIndex].value === '1') {
      capacitySelect.options[2].removeAttribute('disabled');
      capacitySelect.options[0].setAttribute('disabled', 'disabled');
      capacitySelect.options[0].selected = false;
      capacitySelect.options[1].setAttribute('disabled', 'disabled');
      capacitySelect.options[1].selected = false;
      capacitySelect.options[3].setAttribute('disabled', 'disabled');
      capacitySelect.options[3].selected = false;
    }
  });

  housingType.addEventListener('change', function () {
    var value = housingType.options[housingType.selectedIndex].value;
    switch (value) {
      case 'bungalo':
        price.placeholder = '0';
        price.min = '0';
        break;
      case 'flat':
        price.placeholder = '1000';
        price.min = '1000';
        break;
      case 'house':
        price.placeholder = '5000';
        price.min = '5000';
        break;
      case 'palace':
        price.placeholder = '10000';
        price.min = '10000';
        break;
    }
  });

  timein.addEventListener('change', function () {
    var time = timein.options[timein.selectedIndex].value;
    switch (time) {
      case '12:00':
        timeout.options[0].selected = true;
        timeout.options[1].selected = false;
        timeout.options[2].selected = false;
        break;
      case '13:00':
        timeout.options[0].selected = false;
        timeout.options[1].selected = true;
        timeout.options[2].selected = false;
        break;
      case '14:00':
        timeout.options[0].selected = false;
        timeout.options[1].selected = false;
        timeout.options[2].selected = true;
        break;
    }
  });

  timeout.addEventListener('change', function () {
    var time = timeout.options[timeout.selectedIndex].value;
    switch (time) {
      case '12:00':
        timein.options[0].selected = true;
        timein.options[1].selected = false;
        timein.options[2].selected = false;
        break;
      case '13:00':
        timein.options[0].selected = false;
        timein.options[1].selected = true;
        timein.options[2].selected = false;
        break;
      case '14:00':
        timein.options[0].selected = false;
        timein.options[1].selected = false;
        timein.options[2].selected = true;
        break;
    }
  });

  adForm.addEventListener('submit', function (evt) {
    evt.preventDefault();
    window.backend.save(new FormData(adForm), 'https://js.dump.academy/keksobooking', onFormSuccess, onFormError);
  });

  window.form = {
    adFormElements: adFormElements,
    enableFormElements: function () {
      adFormElements.forEach(function (item) {
        item.removeAttribute('disabled');
      });
    },
    disableFormElements: function () {
      adFormElements.forEach(function (item) {
        item.setAttribute('disabled', 'disabled');
      });
    },
    activateAdForm: function () {
      adForm.classList.remove('ad-form--disabled');
    },
    disactivateAdForm: function () {
      adForm.classList.add('ad-form--disabled');
    },
    fillAddress: fillAddress,
    clearForm: clearForm,
  };
})();
