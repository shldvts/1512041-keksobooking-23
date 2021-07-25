import { sendData } from './api.js';

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

const advertForm = document.querySelector('.ad-form');

// Валидация поля заголовка
const titleInput = advertForm.querySelector('#title');

const restrictTitleLength = () => {
  const valueLength = titleInput.value.length;

  if (valueLength < MIN_TITLE_LENGTH) {
    titleInput.setCustomValidity(`Введите ещё ${ MIN_TITLE_LENGTH - valueLength } симв.`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    titleInput.setCustomValidity(`Удалите лишние ${ valueLength - MAX_TITLE_LENGTH } симв.`);
  } else {
    titleInput.setCustomValidity('');
  }

  titleInput.reportValidity();
};

titleInput.addEventListener('input', () => {
  restrictTitleLength();
});

// Соответствие полей типа жилья и цены
const typeInput = advertForm.querySelector('#type');
const priceInput = advertForm.querySelector('#price');

const offerTypeToMinPrice = {
  palace: 10000,
  flat: 1000,
  house: 5000,
  bungalow: 0,
  hotel: 3000,
};

const syncTypeAndPriceInput = () => {
  const minPrice = offerTypeToMinPrice[typeInput.value];

  priceInput.min = minPrice;
  priceInput.placeholder = minPrice;
};

typeInput.addEventListener('change', () => {
  syncTypeAndPriceInput();
});

// Соответствие полей времени въезда и выезда
const timeinInput = advertForm.querySelector('#timein');
const timeoutInput = advertForm.querySelector('#timeout');

timeinInput.addEventListener('change', () => {
  timeoutInput.value = timeinInput.value;
});

timeoutInput.addEventListener('change', () => {
  timeinInput.value = timeoutInput.value;
});

// Соответствие полей количества комнат количеству мест (гостей)
const roomInput = advertForm.querySelector('#room_number');
const capacityInput = advertForm.querySelector('#capacity');
const capacityList = advertForm.querySelectorAll('#capacity option');

const roomsToCapacities = {
  1: [1],
  2: [1, 2],
  3: [1, 2, 3],
  100: [0],
};

const validateRoomsAndCapacityInput = () => {
  const rooms = roomInput.value;
  const capacities  = roomsToCapacities[rooms];

  capacityList.forEach((option) => {
    option.disabled = !capacities.includes(+option.value);
  });

  const capacityValue = +capacityInput.value;

  const capacityErrorMessage = capacities.includes(capacityValue)
    ? ''
    : `Неправильное количество мест: ${capacityValue}`;

  capacityInput.setCustomValidity(capacityErrorMessage);
  capacityInput.reportValidity();
};

roomInput.addEventListener('change', () => {
  validateRoomsAndCapacityInput();
});

// Активация и деактивация формы
const fieldsets = advertForm.querySelectorAll('fieldset');

export const deactivateForm = () => {
  advertForm.classList.add('ad-form--disabled');

  fieldsets.forEach((field) => {
    field.disabled = true;
  });
};

export const activateForm = () => {
  advertForm.classList.remove('ad-form--disabled');

  fieldsets.forEach((field) => {
    field.disabled = false;
  });
};

// Сброс формы
export const resetForm = () => {
  advertForm.reset();
};

export const setFormSubmit = (onSuccess, onFail) => {
  advertForm.addEventListener('submit', (evt) => {
    evt.preventDefault();

    sendData(
      onSuccess,
      onFail,
      new FormData(evt.target),
    );
  });
};
