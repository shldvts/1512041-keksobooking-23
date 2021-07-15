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

deactivateFilter();
