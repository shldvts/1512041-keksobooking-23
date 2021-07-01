import { pluralize } from './utils.js';
import { offerTypesEnToRu } from './data.js';

// Шаблоны
const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
const photoTemplate = cardTemplate.querySelector('.popup__photos img');

// Функция создания карточки объявления
export const renderCard = (advert) => {
  const offer = advert.offer;
  const card = cardTemplate.cloneNode(true);

  card.querySelector('.popup__title').textContent = offer.title;
  card.querySelector('.popup__text--address').textContent = offer.address;
  card.querySelector('.popup__text--price').textContent = `${offer.price} ₽/ночь`;
  card.querySelector('.popup__type').textContent = offerTypesEnToRu[offer.type];
  card.querySelector('.popup__text--capacity').textContent = `${offer.rooms} ${pluralize(offer.rooms, 'комната', 'комнаты', 'комнат')} для ${offer.guests} гостей`;
  card.querySelector('.popup__text--time').textContent = `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`;
  card.querySelector('.popup__description').textContent = offer.description;

  const featuresList = card.querySelector('.popup__features');
  featuresList.innerHTML = '';
  featuresList.innerHTML = offer.features
    .map((feature) => `<li class="popup__feature popup__feature--${feature}">`)
    .join('');

  const photosList = card.querySelector('.popup__photos');
  photosList.innerHTML = '';
  offer.photos.forEach((photoUrl) => {
    const photo = photoTemplate.cloneNode(true);
    photo.src = photoUrl;
    photosList.appendChild(photo);
  });

  const author = advert.author;
  card.querySelector('.popup__avatar').src = author.avatar;

  return card;
};
