import { isEscEvent } from './utils.js';

const TIMEOUT_MS = 3000;

const errorMessageContainer = document.querySelector('#error').content.querySelector('.error');

export const showErrorMessage = (message) => {
  const errorMessage = errorMessageContainer.cloneNode(true);
  errorMessage.querySelector('.error__message').textContent = message;

  return errorMessage;
};

export const showGetDataErrorMessage = () => {
  const errorMessage = showErrorMessage('Ошибка загрузки данных');

  setTimeout(() => {
    errorMessage.remove();
  }, TIMEOUT_MS);
};

const successMessageContainer = document.querySelector('#success').content.querySelector('.success');

export const showSuccessMessage = (message) => {
  const successMessage = successMessageContainer.cloneNode(true);
  successMessage.querySelector('.success__message').textContent = message;

  setTimeout(() => {
    successMessage.remove();
  }, TIMEOUT_MS);

  return successMessage;
};

const errorButton = document.querySelector('error__button');

document.addEventListener('keydown', (evt) => {
  if (isEscEvent(evt) || errorButton.onclick || document.onclick) {
    evt.preventDefault();
    showErrorMessage.classList.add('hidden');
  }
});
