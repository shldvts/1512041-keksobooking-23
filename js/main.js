// Функции получения случайного числа из заданного диапазона
const getRandomNumber = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

const getRandomFloat = (min, max, digit) => {
  const lower = Math.min(Math.abs(min), Math.abs(max));
  const upper = Math.max(Math.abs(min), Math.abs(max));
  const result = Math.random() * (upper - lower) + lower;
  return Number(result.toFixed(digit));
};

// Функции для создания массива из 10 сгенерированных JS-объектов. Каждый объект массива — описание похожего объявления неподалёку.

// Переменные
const TITLES = 'Вас также может заинтересовать:';

const TYPES = [
  'palace',
  'flat',
  'house',
  'bungalow',
  'hotel',
];

const CHECKINS = [
  '12:00',
  '13:00',
  '14:00',
];

const CHECKOUTS = [
  '12:00',
  '13:00',
  '14:00',
];

const FEATURES = [
  'wifi',
  'dishwasher',
  'parking',
  'washer',
  'elevator',
  'conditioner',
];

const DESCRIPTIONS = 'Лучше места для проживания и не придумать.';

const PHOTOS = [
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/duonguyen-8LrGtIxxa4w.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/brandon-hoogenboom-SNxQGWxZQi0.jpg',
  'https://assets.htmlacademy.ru/content/intensive/javascript-1/keksobooking/claire-rendall-b6kAwr1i0Iw.jpg',
];

// Функция: выводит произвольный элемент массива
const getRandomArrayItem = (items) => items[_.random(0, items.length - 1)];

// Функция: создаёт новый массив со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции
const getRandomElementsArray = (items) => {
  items.filter(() => Boolean(getRandomNumber(0, 1)));
};

// Функция: создаёт объект (описание похожего объявления неподалёку)
const createAuthor = (id) => {
  const userId = id < 10 ? `0${id}` : id;
  return {
    avatar: `img/avatars/user${userId}.png`,
  };
};

const createOffer = (location) => ({
  title: TITLES,
  address: `${location.lat}, ${location.lng}`,
  price: getRandomNumber(1000, 10000),
  type: getRandomArrayItem(TYPES),
  rooms: getRandomNumber(1, 8),
  guests: getRandomNumber(1, 10),
  checkin: getRandomArrayItem(CHECKINS),
  checkout: getRandomArrayItem(CHECKOUTS),
  features: getRandomElementsArray(FEATURES),
  description: DESCRIPTIONS,
  photos: getRandomElementsArray(PHOTOS),
});

const createRandomLocation = () => ({
  lat: getRandomFloat (35.65000, 35.70000, 5),
  lng: getRandomFloat (139.70000, 139.80000, 5),
});

const createAdvert = (id) => {
  const location = createRandomLocation();
  return {
    author: createAuthor(id),
    offer: createOffer(location),
    location,
  };
};

// Функция: создаёт массив из заданного количества сгенерированных объектов
const ADVERT_COUNT = 10;

const adverts = new Array(ADVERT_COUNT)
  .fill(null)
  .map((_, index) => createAdvert(index + 1));

adverts;
