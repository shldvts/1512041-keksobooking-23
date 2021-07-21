import { getData } from './api.js';
import { showErrorMessage, showGetDataErrorMessage, showSuccessMessage } from './message.js';
import { addPoints, createMap, clearMap, resetMainMarkerPosition } from './map.js';
import { setFormSubmit, activateForm, resetForm } from './form.js';
import { setFiltersChangeHandler, filterAdverts, activateFilter, resetFilter } from './filter.js';
import { deactivatePage } from './page.js';
import { debounce} from './utils.js';

const SIMILAR_ADVERT_COUNT = 10;

const RERENDER_DELAY = 500;

deactivatePage();

const getAnotherData = () => {
  getData ((adverts) => {
    if (adverts.length === 0) {
      return;
    }

    clearMap();
    addPoints(adverts.slice(0, SIMILAR_ADVERT_COUNT));

    activateFilter();
    setFiltersChangeHandler(debounce(
      () => {
        const filteredAdverts = filterAdverts(adverts, SIMILAR_ADVERT_COUNT);
        clearMap();
        addPoints(filteredAdverts);
      },
      RERENDER_DELAY,
    ));
  },
  () => {
    showGetDataErrorMessage();
  });
};

const resetPageState = () => {
  resetForm();
  resetFilter();
  resetMainMarkerPosition();
  getAnotherData();
};

createMap(() => {
  activateForm();
  getAnotherData();
});

setFormSubmit(
  () => {
    showSuccessMessage('Ваше объявление успешно размещено!');
    resetPageState();
  },
  () => {
    showErrorMessage('Не удалось отправить форму. Попробуйте ещё раз');
  },
);
