import './form.js';
import './filter.js';
import { getData, showErrorMessage } from './api.js';
import { addPoints } from './map.js';
import { setFormSubmit } from './form.js';

const SIMILAR_ADVERT_COUNT = 18;

getData ((adverts) => {
  addPoints(adverts.slice(0, SIMILAR_ADVERT_COUNT));
  activateFilter();
});

setFormSubmit();

// https://up.htmlacademy.ru/javascript/23/check/tasks/1512041/12
// При реализации фильтрации нужно учесть критерий:
// Б23 (не получится использовать метод массива .filter)
// Б24 (вложенный цикл (1-2) только для удобства-features)
// Так делать не нужно:
// adverts.filter(() => ).filter(() => ).slice(0, 10);
// сложные фильтры: проверка стоимости и удобства
