import { pluralize } from './utils.js';

// Шаблоны
const cardTemplate = document.querySelector('#card').content.querySelector('.popup');
const photoTemplate = cardTemplate.querySelector('.popup__photos img');

// Словарик Англ-Рус
const offerTypeEnToRu = {
  palace: 'Дворец',
  flat: 'Квартира',
  house: 'Дом',
  bungalow: 'Бунгало',
  hotel: 'Отель',
};

// Функция создания карточки объявления
export const renderCard = (advert) => {
  const offer = advert.offer;
  const card = cardTemplate.cloneNode(true);

  card.querySelector('.popup__title').textContent = offer.title ? offer.title : '';
  card.querySelector('.popup__text--address').textContent = offer.address ? offer.address : '';
  card.querySelector('.popup__text--price').textContent = offer.price ? `${offer.price} ₽/ночь` : '';
  card.querySelector('.popup__type').textContent = offer.type ? offerTypeEnToRu[offer.type] : '';

  card.querySelector('.popup__text--capacity').textContent = offer.rooms && offer.guests
    ? `${offer.rooms} ${pluralize(offer.rooms, 'комната', 'комнаты', 'комнат')} для ${offer.guests} гостей`
    : '';

  card.querySelector('.popup__text--time').textContent = offer.checkin && offer.checkout
    ? `Заезд после ${offer.checkin}, выезд до ${offer.checkout}`
    : '';

  card.querySelector('.popup__description').textContent = offer.description ? offer.description : '';

  const featuresList = card.querySelector('.popup__features');
  featuresList.innerHTML = '';
  if (Array.isArray(offer.features) && offer.features.length > 0) {
    featuresList.innerHTML = offer.features
      .map((feature) => `<li class="popup__feature popup__feature--${feature}">`)
      .join('');
  }

  const photosList = card.querySelector('.popup__photos');
  photosList.innerHTML = '';
  if (Array.isArray(offer.photos) && offer.photos.length > 0) {
    offer.photos.forEach((photoUrl) => {
      const photo = photoTemplate.cloneNode(true);
      photo.src = photoUrl;
      photosList.appendChild(photo);
    });
  }

  const author = advert.author;
  card.querySelector('.popup__avatar').src = author.avatar;

  return card;
};
