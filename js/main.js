/* АРХИВ
const getRandomNumber = (min, max) => {
  if (min >= 0 && max >= 0) {
    if (min === max) {
      throw new RangeError('Значения диапазона не могут быть равны друг другу!');
    }
    if (min > max) {
      const changePosition = min;
      min = max;
      max = changePosition;
    }
    return Math.floor(Math.random() * (max - min) + min);
  }
  throw new RangeError('Диапазон может быть только положительный!');
};

const getRandomFloat = (min, max, digit) => {
  if (min >= 0 && max >= 0) {
    if (min === max) {
      throw new RangeError('Значения диапазона не могут быть равны друг другу!');
    }
    if (min > max) {
      const changePosition = min;
      min = max;
      max = changePosition;
    }
    return (Math.random() * (max - min) + min).toFixed(digit);
  }
  throw new RangeError('Диапазон может быть только положительный!');
}; */

function getRandomNumber (min, max) {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

function getRandomFloat (min, max, digits = 1) {
  const lower = Math.min(Math.abs(min), Math.abs(max));
  const upper = Math.max(Math.abs(min), Math.abs(max));
  const result = Math.random() * (upper - lower) + lower;
  return result.toFixed(digits);
};

getRandomNumber (0, 0);
getRandomFloat (0, 0, 0);

// Функции для создания массива из 10 сгенерированных JS-объектов. Каждый объект массива — описание похожего объявления неподалёку.

const AUTHOR = 'img/avatars/user0' + getRandomNumber (1, 8) + '.png';

const TITLES = 'Вас также может заинтересовать:';

const ADDRESS = ['location.x', 'location.y',];

const TYPES = ['palace', 'flat', 'house', 'bungalow', 'hotel',];

const CHECKINS = ['12:00', '13:00', '14:00',];

const CHECKOUT = ['12:00', '13:00', '14:00',];

const FEATURES = ['wifi', 'dishwasher', 'parking', 'washer', 'elevator', 'conditioner',];

const DESCRIPTIONS = 'Лучше места для проживания и не придумать.';

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

const LOCATION = {
  lat: getRandomFloat (35.65000, 35.70000, 5),
  lng: getRandomFloat (139.70000, 139.70000, 5),
}

// Функция: выводит произвольный элемент массива

const getRandomArrayElement = (elements) => {
  return elements[_.random(0, elements.length - 1)];
};

// Функция: изменяет содержимое массива, удаляя его элементы

const delRandomElementsArray = (someArray, startElement, delQuantity) => {
  return someArray.splice(startElement, delQuantity);
};

// Функция: создаёт объект (описание похожего объявления неподалёку)

const createOffer = () => {
  return {
    avatar: AUTHOR,
    title: TITLES,
    address: ADDRESS,
    price: getRandomNumber(1000, 1000000),
    type: getRandomArrayElement(TYPES),
    rooms: getRandomNumber(1, 15),
    guests: getRandomNumber(1, 10),
    checkin: getRandomArrayElement(CHECKINS),
    checkout: getRandomArrayElement(CHECKOUT),
    features: delRandomElementsArray(FEATURES, getRandomNumber(0,(FEATURES.length - 1)), getRandomNumber(0, (FEATURES.length - 1))),
    description: DESCRIPTIONS,
    photos: delRandomElementsArray(PHOTOS, getRandomNumber(0,(PHOTOS.length - 1)), getRandomNumber(0, (PHOTOS.length - 1))),
    location: LOCATION,
  };
};

// Функция: создаёт массив из заданного количества сгенерированных объектов

const SIMILAR_OFFER_COUNT = 10;

const similarOffers = new Array(SIMILAR_OFFER_COUNT).fill(null).map(() => createOffer());

similarOffers();
