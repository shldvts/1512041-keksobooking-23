import { renderCard } from './card.js';

const TokyoCenterCoord = {
  LAT: 35.6894,
  LNG: 139.692,
};

const VIEW_ZOOM = 12;


const map = L.map('map-canvas');
const groupLayer = L.layerGroup();

export const createMap = (callback) => {
  map
    .on('load', () => {
      callback();
    })
    .setView({
      lat: TokyoCenterCoord.LAT,
      lng: TokyoCenterCoord.LNG,
    }, VIEW_ZOOM);
};

L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

groupLayer.addTo(map);

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

const addressInput = document.querySelector('#address');

export const renderAddressInput = () => {
  const { lat, lng } = mainPinMarker.getLatLng();

  addressInput.value = `${lat.toFixed(5)}, ${lng.toFixed(5)}`;
};

export const resetMainMarkerPosition = () => {
  mainPinMarker.setLatLng({
    lat: TokyoCenterCoord.LAT,
    lng: TokyoCenterCoord.LNG,
  });

  renderAddressInput();
};

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
    .addTo(groupLayer)
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

export const clearMap = () => groupLayer.clearLayers();

mainPinMarker.on('drag', (evt) => {
  renderAddressInput(evt);
});
