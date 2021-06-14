import { TITLES, TYPES, CHECKINS, CHECKOUTS, FEATURES, DESCRIPTIONS, PHOTOS } from './data.js';
import { getRandomNumber, getRandomFloat, getRandomArrayItem, getRandomElementsArray } from './get-random.js';

// Функция создания адреса изображения вида img/avatars/user{{xx}}.png, где {{xx}} — это число от 1 до 10
// Перед однозначными числами ставится 0. Например, 01, 02...10. Адреса изображений не повторяются
export const createAuthor = (id) => {
  const userId = id < 10 ? `0${id}` : id;
  return {
    avatar: `img/avatars/user${userId}.png`,
  };
};

// Функция создания объекта, содержащего информацию об объявлении
export const createOffer = (location) => ({
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

// Функция создания объекта местоположения в виде географических координат
// lat, число с плавающей точкой — широта, случайное значение
// lng, число с плавающей точкой — долгота, случайное значение
export const createRandomLocation = () => ({
  lat: getRandomFloat (35.65000, 35.70000, 5),
  lng: getRandomFloat (139.70000, 139.80000, 5),
});

// Функция создания объекта массива — описание похожего объявления неподалёку
export const createAdvert = (id) => {
  const location = createRandomLocation();
  return {
    author: createAuthor(id),
    offer: createOffer(location),
    location,
  };
};
