'use strict';

(function () {
  var form = document.querySelector('.map__filters');
  var housingType = document.querySelector('#housing-type');
  var housingPrice = document.querySelector('#housing-price');
  var housingRooms = document.querySelector('#housing-rooms');
  var housingGuests = document.querySelector('#housing-guests');
  var housingFeatures = document.querySelector('#housing-features');
  var typeValue;
  var roomsValue;
  var priceValue;
  var guestsValue;

  var PriceRange = {
    'HIGH': 50000,
    'LOW': 10000
  };
  var GuestsRange = {
    'MAX': 3,
    'MIN': 1
  };

  var checkHousingType = function (it) {
    typeValue = housingType.options[housingType.selectedIndex].value;
    if (typeValue === 'any') {
      return true;
    }
    return it.offer.type === typeValue;
  };

  var checkPrice = function (it) {
    priceValue = housingPrice.options[housingPrice.selectedIndex].value;
    switch (priceValue) {
      case 'low':
        return it.offer.price < PriceRange['LOW'];
      case 'high':
        return it.offer.price > PriceRange['HIGH'];
      case 'middle':
        return (it.offer.price >= PriceRange['LOW'] && it.offer.price <= PriceRange['HIGH']);
      default:
        return true;
    }
  };

  var checkRooms = function (it) {
    roomsValue = housingRooms.options[housingRooms.selectedIndex].value;
    return it.offer.rooms === Number(roomsValue) || roomsValue === 'any';
  };

  var checkGuests = function (it) {
    guestsValue = housingGuests.options[housingGuests.selectedIndex].value;
    if (guestsValue === '0') {
      return it.offer.guests > GuestsRange['MAX'] || it.offer.guests < GuestsRange['MIN'];
    }
    return (it.offer.guests === Number(guestsValue) || guestsValue === 'any');
  };

  var checkFeatures = function (it) {
    var featureValues = housingFeatures.querySelectorAll('input:checked');
    for (var i = 0; i < featureValues.length; i++) {
      if (!it.offer.features.includes(featureValues[i].value)) {
        return false;
      }
    }
    return true;
  };

  var filterPins = function () {
    var housingOffers = window.map.places.filter(function (it) {
      return (checkHousingType(it) && checkPrice(it) && checkRooms(it) && checkGuests(it) && checkFeatures(it));
    });
    window.map.renderPlaces(housingOffers);
  };

  form.style.display = 'none';

  form.addEventListener('change', window.debounce(function () {
    filterPins();
  }));

  window.filter = {
    form: form,
    filterPins: filterPins,
    clearFilter: function () {
      housingType.options[0].selected = true;
      housingPrice.options[0].selected = true;
      housingRooms.options[0].selected = true;
      housingGuests.options[0].selected = true;
      var checkboxes = housingFeatures.querySelectorAll('input[type=checkbox]:checked');
      checkboxes.forEach(function (item) {
        item.checked = false;
      });
    }
  };
})();
