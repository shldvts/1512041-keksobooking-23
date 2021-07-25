const USER_OPTION = 'any';
const LOW_PRICE = 10000;
const HIGH_PRICE = 50000;
const DEFAULT_FEATURES = ['wi-fi', 'parking'];

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
const housingPrice = document.querySelector('#housing-price');
const housingRooms = document.querySelector('#housing-rooms');
const housingGuests = document.querySelector('#housing-guests');
const housingFeatures = document.querySelector('#housing-features');

const filterOfferType = (offer) => housingType.value === USER_OPTION || housingType.value === offer.type;

const filterOfferPrice = (offer) => {
  switch (housingPrice.value) {
    case USER_OPTION:
      return true;
    case 'low':
      return offer.price < LOW_PRICE;
    case 'middle':
      return offer.price >= LOW_PRICE && offer.price < HIGH_PRICE;
    case 'high':
      return offer.price >= HIGH_PRICE;
    default:
      return false;
  }
};

const filterOfferRooms = (offer) => housingRooms.value === USER_OPTION || +housingRooms.value === offer.rooms;

const filterOfferGuests = (offer) => housingGuests.value === USER_OPTION || +housingGuests.value === offer.guests;

const filterOfferFeatures = (offer) => {
  const checkedFeatures = housingFeatures.querySelectorAll('input[type="checkbox"]:checked');

  if(!offer.features) {
    DEFAULT_FEATURES;
    return;
  }

  let count = 0;

  checkedFeatures.forEach((feature) => {
    if (offer.features.includes(feature.value)) {
      count++;
    }
  });

  return count === checkedFeatures.length;
};

const filterOffer = (offer) =>
  filterOfferType(offer) &&
  filterOfferGuests(offer) &&
  filterOfferRooms(offer) &&
  filterOfferPrice(offer) &&
  filterOfferFeatures(offer);

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
