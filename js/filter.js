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

const housingFeatures = document.querySelector('#housing-features');

let currentFeatures = [];

// кокретные функции фильтрации

// общая функция фильтрации

export const filterAdverts = (adverts, limit) => {
  currentFeatures = Array.from(housingFeatures.querySelectorAll('input:checked'));

  const filteredAdverts = [];
  for (let i = 0; i < adverts.length; i++) {
    const advert = adverts[i];

    if (true) { // если true
      filteredAdverts.push(advert);
    }

    if (filteredAdverts.length === limit) {
      break;
    }
  }

  currentFeatures = null;

  return filteredAdverts;
};

filterAdverts();

let onFiltersChange = null;

filters.addEventListener('change', () => {
  if (typeof onFiltersChange === 'function') {
    onFiltersChange();
  }
});

export const setFiltersChangeHandler = (callback) => {
  onFiltersChange = callback;
};
