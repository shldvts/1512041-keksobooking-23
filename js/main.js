import { createRandomAdverts } from './random-adverts.js';
import { addPoints } from './map.js';
import './form.js';
import './filter.js';

const randomAdverts = createRandomAdverts(10);

/*
// api.js
const getData = (onSuccess, onFail) => {
  fetch(RequestUrl.GET)
    .then((response) => response.json())
    .then(onSuccess)
    .catch(onFail);
};

const onGetDataSuccess = (adverts) => {
  if (adverts.length > 0) {
    addPoints(adverts);
    activateFilter();
  }
  // getData()
};

const onGetDataFail = (adverts) => {
  showError('Не удалось получить данные');
};

/*
getData(onGetDataSuccess, onGetDataFail);
*/

addPoints(randomAdverts);

// https://up.htmlacademy.ru/javascript/23/check/tasks/1512041/12
// При реализации фильтрации нужно учесть критерий:
//  Б23 (не получится использовать метод массива .filter)
//  Б24 (вложенный цикл (1-2) только для удобства-features)
// Так делать не нужно:
//  adverts.filter(() => ).filter(() => ).slice(0, 10);

// сложные фильтры: проверка стоимости и удобства
