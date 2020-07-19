'use strict';

(function () {
  var image = document.querySelector('.theme-control img');
  // Переключение светлой и темной темы

  image.addEventListener('click', function () {
    document.body.classList.toggle('dark-theme');
  });

  // 100% высота контейнера
  window.addEventListener('resize', function () {
    document.querySelector(':root').style.setProperty('--vh', window.innerHeight / 100 + 'px');
  });

  // Ширина кнопки Git push = ширине картинки

  var newWidth = image.clientWidth;
  document.querySelector('.content__button').style.width = newWidth + 'px';

})();
