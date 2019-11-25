'use strict';

(function () {
  var MAX_PINS = 5;

  var places = [];
  var fragment;
  var pin = document.querySelector('#pin').content.querySelector('.map__pin');
  var card = document.querySelector('#card').content.querySelector('.map__card');
  var mapPins = document.querySelector('.map__pins');
  var mapBlock = document.querySelector('.map');
  var mainPin = document.querySelector('.map__pin--main');
  var pinsDiv = document.createElement('div');
  var mainPinInitX = Math.round(mainPin.offsetLeft + mainPin.offsetWidth / 2);
  var mainPinInitY = Math.round(mainPin.offsetTop + mainPin.offsetHeight / 2);

  var housingTypes = {
    'flat': 'Квартира',
    'bungalo': 'Бунгало',
    'house': 'Дом',
    'palace': 'Дворец',
  };

  var onEscPress = function (evt) {
    window.util.isEscEvent(evt, deleteCard);
    document.removeEventListener('keydown', onEscPress);
  };

  var deleteCard = function () {
    if (document.querySelector('.map__card')) {
      document.querySelector('.map__card').remove();
    }
  };

  var onPopupClosePress = function () {
    deleteCard();
  };

  var getPinCard = function (data) {
    var cardItem = card.cloneNode(true);
    var title = cardItem.querySelector('.popup__title');
    var address = cardItem.querySelector('.popup__text--address');
    var price = cardItem.querySelector('.popup__text--price');
    var type = cardItem.querySelector('.popup__type');
    var capacity = cardItem.querySelector('.popup__text--capacity');
    var time = cardItem.querySelector('.popup__text--time');
    var description = cardItem.querySelector('.popup__description');
    var features = cardItem.querySelector('.popup__features');
    var photos = cardItem.querySelector('.popup__photos');

    cardItem.querySelector('.popup__avatar').src = data.author.avatar;

    if (data.offer.title.textContent === '') {
      title.classList.add('visually-hidden');
    } else {
      title.textContent = data.offer.title;
    }

    if (data.offer.address.textContent === '') {
      address.classList.add('visually-hidden');
    } else {
      address.textContent = data.offer.address;
    }

    if (data.offer.description.textContent === '') {
      description.classList.add('visually-hidden');
    } else {
      description.textContent = data.offer.description;
    }

    if (data.offer.price.textContent === '') {
      price.classList.add('visually-hidden');
    } else {
      price.textContent = data.offer.price + '₽/ночь';
    }

    if (data.offer.type.textContent === '') {
      type.classList.add('visually-hidden');
    } else {
      type.textContent = housingTypes[data.offer.type];
    }

    if (data.offer.rooms.textContent === '' || !data.offer.guests.textContent === '') {
      capacity.classList.add('visually-hidden');
    } else {
      capacity.textContent = data.offer.rooms + ' комнаты для ' + data.offer.guests + ' гостей';
    }

    if (data.offer.checkin.textContent === '' || data.offer.checkout.textContent === '') {
      time.classList.add('visually-hidden');
    } else {
      time.textContent = 'Заезд после ' + data.offer.checkin + ', выезд до ' + data.offer.checkout;
    }

    if (data.offer.features.length === 0) {
      features.classList.add('visually-hidden');
    } else {
      features.innerHTML = '';
      for (var i = 0; i < data.offer.features.length; i++) {
        var feature = document.createElement('li');
        feature.classList.add('popup__feature');
        feature.classList.add('popup__feature--' + data.offer.features[i]);
        cardItem.querySelector('.popup__features').appendChild(feature);
      }
    }

    if (data.offer.photos.length === 0) {
      photos.classList.add('visually-hidden');
    } else {
      photos.innerHTML = '';
      for (var j = 0; j < data.offer.photos.length; j++) {
        var photo = document.createElement('img');
        photo.classList.add('popup__photo');
        photo.src = data.offer.photos[j];
        photo.width = '45';
        photo.height = '40';
        photo.alt = 'Фотография жилья';
        photos.appendChild(photo);
      }
    }

    document.addEventListener('keydown', onEscPress);
    cardItem.querySelector('.popup__close').addEventListener('click', onPopupClosePress);
    return cardItem;
  };

  var getPlace = function (data) {
    var pinElement = pin.cloneNode(true);
    var pinWidth = pinElement.querySelector('img').getAttribute('width');
    var pinHeight = pinElement.querySelector('img').getAttribute('height');
    pinElement.style = 'left: ' + (data.location.x - pinWidth / 2) + 'px; top: ' + (data.location.y - pinHeight / 2) + 'px;';
    pinElement.querySelector('img').src = data.author.avatar;
    pinElement.querySelector('img').alt = data.offer.title;
    pinElement.addEventListener('click', function () {
      if (document.querySelector('.map__pin--active')) {
        document.querySelector('.map__pin--active').classList.remove('map__pin--active');
      }
      deleteCard();
      pinsDiv.appendChild(getPinCard(data));
      pinElement.classList.add('map__pin--active');
    });
    return pinElement;
  };

  mapBlock.insertBefore(pinsDiv, document.querySelector('.map__filters-container'));

  window.map = {
    mapBlock: mapBlock,
    mainPin: mainPin,
    mainPinInitX: mainPinInitX,
    mainPinInitY: mainPinInitY,
    mapPins: mapPins,
    places: places,
    pinsDiv: pinsDiv,
    renderPlaces: function (data) {
      pinsDiv.innerHTML = '';
      fragment = document.createDocumentFragment();
      var pinCount = data.length > MAX_PINS ? MAX_PINS : data.length;
      var j = 0;
      for (var i = 0; i < data.length && j < pinCount; i++) {
        if (data[i].offer) {
          fragment.appendChild(getPlace(data[i]));
          j++;
        }
      }
      pinsDiv.appendChild(fragment);
    },
    activateMap: function () {
      mapBlock.classList.remove('map--faded');
    },
    disactivateMap: function () {
      mapBlock.classList.add('map--faded');
    },
  };
})();
