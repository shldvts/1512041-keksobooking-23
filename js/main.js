import { createAuthor, createOffer, createRandomLocation, createAdvert } from './create-special.js';

// Функция: создаёт массив из заданного количества сгенерированных объектов
const ADVERT_COUNT = 10;

const adverts = new Array(ADVERT_COUNT)
  .fill(null)
  .map((_, index) => createAdvert(index + 1));

adverts;
