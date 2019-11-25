'use strict';

(function () {
  var STATUS_OK = 200;

  var getXhr = function (onLoad, onError) {
    var xhr = new XMLHttpRequest();
    xhr.responseType = 'json';
    xhr.timeout = 1000;
    xhr.addEventListener('load', function () {
      if (xhr.status === STATUS_OK) {
        onLoad(xhr.response);
      } else {
        onError('Статус ответа: ' + xhr.status + ' ' + xhr.statusText);
      }
    });
    xhr.addEventListener('error', function () {
      onError('Произошла ошибка соединения');
    });
    xhr.addEventListener('timeout', function () {
      onError('Запрос не успел выполниться за ' + xhr.timeout + 'мс');
    });
    return xhr;
  };

  window.backend = {
    load: function (url, onLoad, onError) {
      var xhr = getXhr(onLoad, onError);
      xhr.open('GET', url);
      xhr.send();
    },
    save: function (data, url, onLoad, onError) {
      var xhr = getXhr(onLoad, onError);
      xhr.open('POST', url);
      xhr.send(data);
    }
  };
})();
