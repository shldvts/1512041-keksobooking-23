const advertForm = document.querySelector('.ad-form');
const titleInput = advertForm.querySelector('#title');

// Валидация поля заголовка

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

const limitTitleLength = () => {
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
  limitTitleLength();
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

const checkCapacityInput = (capacities) => capacities.includes(+capacityInput.value);

const validateRoomsAndCapacityInput = () => {
  const rooms = roomInput.value;
  const capacities  = roomsToCapacities[rooms];

  capacityList.forEach((option) => {
    option.disabled = !checkCapacityInput(capacities);
  });

  const capacityErrorMessage = checkCapacityInput(capacities)
    ? ''
    : `Неправильное количество мест: ${+capacityInput.value}`;

  capacityInput.setCustomValidity(capacityErrorMessage);
  capacityInput.reportValidity();
};

roomInput.addEventListener('change', () => {
  validateRoomsAndCapacityInput();
});

document.addEventListener('DOMContentLoaded', () => {
  limitTitleLength();
  syncTypeAndPriceInput();
  validateRoomsAndCapacityInput();
});
