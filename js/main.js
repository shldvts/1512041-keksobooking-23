import { getData } from './api.js';
import { showErrorMessage, showGetDataErrorMessage, showSuccessMessage } from './message.js';
import { addPoints, createMap, resetMainMarkerPosition, clearMap } from './map.js';
import { setFormSubmit, activateForm } from './form.js';
import { setFiltersChangeHandler, filterAdverts, activateFilter } from './filter.js';
import { deactivatePage } from './page.js';

const SIMILAR_ADVERT_COUNT = 10;

deactivatePage();

resetMainMarkerPosition();

createMap(() => {
  activateForm();

  getData ((adverts) => {
    if (adverts.length === 0) {
      return;
    }

    addPoints(adverts.slice(0, SIMILAR_ADVERT_COUNT));

    activateFilter();
    setFiltersChangeHandler(() => {
      const filteredAdverts = filterAdverts(adverts, SIMILAR_ADVERT_COUNT);

      clearMap();
      addPoints(filteredAdverts);
    });
  },
  () => {
    showGetDataErrorMessage();
  });
});

setFormSubmit(
  () => {
    showSuccessMessage();
  },
  () => showErrorMessage('Не удалось отправить форму. Попробуйте ещё раз'),
);
