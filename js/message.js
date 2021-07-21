import { isEscEvent, removeElement } from './utils.js';

const TIMEOUT_MS = 3000;

const errorMessageContainer = document.querySelector('#error').content.querySelector('.error');
const successMessageContainer = document.querySelector('#success').content.querySelector('.success');

const closeMessage = () => {
  document.querySelectorAll('.success, .error').forEach(removeElement);
};

const onMessageEscapeKeydown = (evt) => {
  if (isEscEvent(evt)) {
    evt.preventDefault();

    closeMessage();
  }
};

const onDocumentClick = (evt) => {
  evt.preventDefault();

  closeMessage();
};

export const showSuccessMessage = (text) => {
  const message = successMessageContainer.cloneNode(true);
  message.querySelector('.success__message').textContent = text;

  document.body.appendChild(message);

  document.addEventListener('click', onDocumentClick, { once: true });
  document.addEventListener('keydown', onMessageEscapeKeydown);
};

export const showErrorMessage = (text) => {
  const message = errorMessageContainer.cloneNode(true);
  message.querySelector('.error__message').textContent = text;

  document.body.appendChild(message);

  document.addEventListener('click', onDocumentClick, { once: true });
  document.addEventListener('keydown', onMessageEscapeKeydown);
};

export const showGetDataErrorMessage = () => {
  const message = showErrorMessage('Ошибка загрузки данных');

  document.body.appendChild(message);

  setTimeout(removeElement, TIMEOUT_MS);
};
