import { renderCard } from './card.js';
import { activateForm } from './form.js';
import { activateFilter } from './filter.js';

const TokyoCenterCoord = {
  LAT: 35.6894,
  LNG: 139.692,
};

const VIEW_ZOOM = 12;

const map = L.map('map-canvas')
  .on('load', () => {
    activateFilter();
    activateForm();
  })
  .setView({
    lat: TokyoCenterCoord.LAT,
    lng: TokyoCenterCoord.LNG,
  }, VIEW_ZOOM);

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

L.layerGroup().addTo(map);

const pinIcon = L.icon({
  iconUrl: '../img/pin.svg',
  iconSize: [40, 40],
  iconAnchor: [20, 40],
});

const mainPinIcon = L.icon({
  iconUrl: '../img/main-pin.svg',
  iconSize: [52, 52],
  iconAnchor: [26, 52],
});

const mainPinMarker = L.marker(
  {
    lat: TokyoCenterCoord.LAT,
    lng: TokyoCenterCoord.LNG,
  },
  {
    draggable: true,
    icon: mainPinIcon,
  },
);

mainPinMarker.addTo(map);

/*
const resetMarker = (lat, lng) => {
  mainPinMarker.setLatLng([lat, lng]);
};
resetMarker(TokyoCenterCoord.LAT, TokyoCenterCoord.LNG);
*/

const createMarker = (point) => {
  const marker = L.marker(
    {
      lat: point.location.lat,
      lng: point.location.lng,
    },
    {
      icon: pinIcon,
    },
  );

  marker
    .addTo(map)
    .bindPopup(
      renderCard(point),
      {
        keepInView: true,
      },
    );
};

export const addPoints = (adverts) => {
  adverts.forEach(createMarker);
};

const addressInput = document.querySelector('#address');

mainPinMarker.on('drag', (evt) => {
  const { lat, lng } = evt.target.getLatLng();

  addressInput.value = `${lat}, ${lng}`;
});
