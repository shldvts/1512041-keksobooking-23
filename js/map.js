import { renderCard } from './card.js';

const mapCanvas = document.querySelector('.map__canvas');

export const addCard = (advert) => {
  const card = renderCard(advert);
  mapCanvas.appendChild(card);
};

// Интерактивная карта

const map = L.map('map-canvas')
  //.on('load', () => {
  //  console.log('Карта загружена.');
  //})
  .setView({
    lat: 59.96831,
    lng: 30.31748,
  }, 12);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

const createCustomPopup = (point) => {
  const balloonTemplate = document.querySelector('#balloon').content.querySelector('.balloon');
  const customPopup = balloonTemplate.cloneNode(true);

  customPopup.querySelector('.balloon__title').textContent = point.title;
  customPopup.querySelector('.balloon__lat-lng').textContent = `Координаты: ${point.lat}, ${point.lng}`;

  return customPopup;
};

const markerGroup = L.layerGroup().addTo(map);

const createMarker = (point) => {

  const mainPinIcon = L.icon({
    iconUrl: '../leaflet/images/marker-icon-2x.png',
    iconSize: [52, 52],
    iconAnchor: [26, 52],
  });

  const marker = L.marker(
    {
      lat: 59.96831,
      lng: 30.31748,
    },
    {
      draggable: true,
      icon: mainPinIcon,
    },
  );

  marker
    .addTo(map)
    .bindPopup(
      createCustomPopup(point),
      {
        keepInView: true,
      },
    );
};

createMarker();

// marker.on('moveend', (evt) => {
//   console.log(evt.target.getLatLng());
// });

resetButton.addEventListener('click', () => {
  mainPinMarker.setLatLng ({
    lat: 59.96831,
    lng: 30.31748,
  });

  map.setView({
    lat: 59.96831,
    lng: 30.31748,
  }, 16);
});

markerGroup.clearLayers();
