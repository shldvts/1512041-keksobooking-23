import { createRandomAdverts } from './random-adverts.js';
// import { addCard, activateMap, deactivateMap } from './map.js';
import { addCard } from './map.js';

const randomAdverts = createRandomAdverts(10);

addCard(randomAdverts[3]);

// form

/*
formTitleInput.addEventListener('invalid', () => {
  if (formTitleInput.validity.tooShort) {
      formTitleInput.setCustomValidity('Минимальная длина заголовка объявления — 30 символов')
  } else if (formTitleInput.validity.tooLong) {
      formTitleInput.setCustomValidity('Длина заголовка объявления не должна превышать 100 символов')
  } else if (formTitleInput.validity.valueMissing) {
      formTitleInput.setCustomValidity('Обязательное поле для заполнения')
  } else {
      formTitleInput.setCustomValidity(' ');
  }
});

const MIN_TITLE_LENGTH = 30;
const MAX_TITLE_LENGTH = 100;

formTitleInput.addEventListener('input', () => {
  const valueLength = formTitleInput.value.length;
  
  if (valueLength < MIN_TITLE_LENGTH) {
    formTitleInput.setCustomValidity(`Введите ещё ${ MIN_TITLE_LENGTH - valueLength } симв.`);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    formTitleInput.setCustomValidity(`Удалите лишние ${ valueLength - MAX_TITLE_LENGTH } симв.`);
  } else {
    formTitleInput.setCustomValidity('');
  }
  
  formTitleInput.reportValidity();
  }); */
  
const advertForm = document.querySelector('.ad-form');

const formTitleInput = advertForm.querySelector('#title');

const changeInputSymbols = (someInput, minInputLength, maxInputLength) => {
  someInput.addEventListener('input', () => {
    const valueLength = someInput.value.length;
    
    if (valueLength < minInputLength) {
      someInput.setCustomValidity(`Введите ещё ${ minInputLength - valueLength } симв.`);
    } else if (valueLength > maxInputLength) {
      someInput.setCustomValidity(`Удалите лишние ${ valueLength - maxInputLength } симв.`);
    } else {
      someInput.setCustomValidity('');
    }
    
    someInput.reportValidity();
  });
};

changeInputSymbols (formTitleInput, 30, 100);

//

const formRoomInput = advertForm.querySelector('#room_number');

const formCapacityInput = advertForm.querySelector('#capacity');

formRoomInput.addEventListener('input', () => {
  const rooms = formRoomInput.value;
  
  if (rooms == 1) {
    formCapacityInput[1].setAttribute('disabled', 'disabled');
    formCapacityInput[0].setAttribute('disabled', 'disabled');
    formCapacityInput[3].setAttribute('disabled', 'disabled');
  } else {
    formCapacityInput[1].removeAttribute('disabled', 'disabled');
    formCapacityInput[0].removeAttribute('disabled', 'disabled');
    formCapacityInput[3].removeAttribute('disabled', 'disabled');
  };
  
  formCapacityInput.reportValidity();
});
