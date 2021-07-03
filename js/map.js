import { renderCard } from './card.js';

const mapCanvas = document.querySelector('.map__canvas');

export const addCard = (advert) => {
  const card = renderCard(advert);
  mapCanvas.appendChild(card);
};
