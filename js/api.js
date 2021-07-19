export const getData = (onSuccess, onFail) => {
  fetch('https://23.javascript.pages.academy/keksobooking/data')
    .then((response) => response.json())
    .then((adverts) => {
      if (adverts.length > 0) {
        onSuccess(adverts);
      }
    })
    .catch(() => {
      onFail('Не удалось получить данные.');
    });
};

/*export const getData = (onSuccess, onFail) => {
  fetch(
      'https://23.javascript.pages.academy/keksobooking/data'
    )
    .then((response) => response.json())
    .then(onSuccess)
    .catch(onFail);
};

const onGetDataSuccess = (adverts) => {
  if (adverts.length > 0) {
    addPoints(adverts.slice(0, SIMILAR_ADVERT_COUNT));
    activateFilter();
  }
  getData()
};

const onGetDataFail = (adverts) => {
  showErrorMessage('Не удалось получить данные.');
};

getData(onGetDataSuccess, onGetDataFail); */

export const sendData = (onSuccess, onFail, body) => {
  fetch(
    'https://23.javascript.pages.academy/keksobooking', 
      {
        method: 'POST',
        body,
      },
    )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail('Не удалось отправить форму. Попробуйте ещё раз');
      }
    })
    .catch(() => {
      onFail('Не удалось отправить форму. Попробуйте ещё раз');
    });
};

export const showErrorMessage = (message) => {
  const errorMessageContainer = document.querySelector('#error').content.querySelector('.error');
  const errorMessage = errorMessageContainer.cloneNode(true);

  errorMessage.querySelector('.error__message').textContent = message;

  setTimeout(() => {
    errorMessageContainer.remove();
  }, 5000);

  return errorMessage;
};
