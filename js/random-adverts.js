import { TITLE, TYPES, CHECKINS, CHECKOUTS, FEATURES, DESCRIPTION, PHOTOS } from './data.js';
import { getRandomNumber, getRandomFloat, getRandomArrayItem, getRandomArrayItems } from './utils.js';

// Функция создания адреса изображения вида img/avatars/user{{xx}}.png, где {{xx}} — это число от 1 до 10
// Перед однозначными числами ставится 0. Например, 01, 02...10. Адреса изображений не повторяются
const createAuthor = (id) => {
  const userId = id < 10 ? `0${id}` : id;
  return {
    avatar: `img/avatars/user${userId}.png`,
  };
};

// Функция создания объекта, содержащего информацию об объявлении
const createOffer = (location) => ({
  title: TITLE,
  address: `${location.lat}, ${location.lng}`,
  price: getRandomNumber(1000, 10000),
  type: getRandomArrayItem(TYPES),
  rooms: getRandomNumber(1, 8),
  guests: getRandomNumber(1, 10),
  checkin: getRandomArrayItem(CHECKINS),
  checkout: getRandomArrayItem(CHECKOUTS),
  features: getRandomArrayItems(FEATURES),
  description: DESCRIPTION,
  photos: getRandomArrayItems(PHOTOS),
});

// Функция создания объекта местоположения в виде географических координат
// lat, число с плавающей точкой — широта, случайное значение
// lng, число с плавающей точкой — долгота, случайное значение
const createRandomLocation = () => ({
  lat: getRandomFloat (35.65000, 35.70000, 5),
  lng: getRandomFloat (139.70000, 139.80000, 5),
});

// Функция создания объекта массива — описание похожего объявления неподалёку
const createAdvert = (id) => {
  const location = createRandomLocation();
  return {
    author: createAuthor(id),
    offer: createOffer(location),
    location,
  };
};

// Функция: создаёт массив из заданного количества сгенерированных объектов
export const createRandomAdverts = (count) => new Array(count).fill(null).map((_, index) => createAdvert(index + 1));
