const filters = document.querySelector('.map__filters');
const filterSelects = filters.querySelectorAll('select, fieldset');

export const activateFilter = () => {
  filters.classList.remove('map__filters--disabled');

  filterSelects.forEach((field) => {
    field.disabled = false;
  });
};

export const deactivateFilter = () => {
  filters.classList.add('map__filters--disabled');

  filterSelects.forEach((field) => {
    field.disabled = true;
  });
};

const housingType = document.querySelector('#housing-type');
const housingRooms = document.querySelector('#housing-rooms');
const housingGuests = document.querySelector('#housing-guests');
const housingFeatures = document.querySelector('#housing-features');

let currentFeatures = [];

const filterFeatures = (offer) => {
  currentFeatures = Array.from(housingFeatures.querySelectorAll('input:checked'));
  const features = offer.features;
  return currentFeatures.every((feature) => features.include(feature.value));
};

const filterOfferType = (offer) => housingType.value === 'any' || housingType.value === offer.type;

const filterOfferRooms = (offer) => housingRooms.value === 'any' || +housingRooms.value === offer.rooms;

const filterOfferGuests = (offer) => housingGuests.value === 'any' || +housingGuests.value === offer.guests;

const filterOffer = (offer) =>
  filterOfferType(offer) &&
  filterOfferGuests(offer) &&
  filterOfferRooms(offer) &&
  filterFeatures(offer);

export const filterAdverts = (adverts, limit) => {

  const filteredAdverts = [];
  for (let i = 0; i < adverts.length; i++) {
    const advert = adverts[i];

    if (filterOffer(advert.offer)) {
      filteredAdverts.push(advert);
    }

    if (filteredAdverts.length === limit) {
      break;
    }
  }

  currentFeatures = null;

  return filteredAdverts;
};

let onFiltersChange = null;

filters.addEventListener('change', () => {
  if (typeof onFiltersChange === 'function') {
    onFiltersChange();
  }
});

export const setFiltersChangeHandler = (callback) => {
  onFiltersChange = callback;
};

export const resetFilter = () => {
  filters.reset();
};
