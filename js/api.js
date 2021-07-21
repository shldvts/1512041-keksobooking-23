const RequestUrl = {
  POST: 'https://23.javascript.pages.academy/keksobooking',
  GET: 'https://23.javascript.pages.academy/keksobooking/data',
};

const RequestMethod = {
  POST: 'POST',
};

export const getData = (onSuccess, onFail) => {
  fetch(RequestUrl.GET)
    .then((response) => response.json())
    .then(onSuccess)
    .catch(onFail);
};

export const sendData = (onSuccess, onFail, body) => {
  fetch(
    RequestUrl.POST,
    {
      method: RequestMethod.POST,
      body,
    },
  )
    .then((response) => {
      if (response.ok) {
        onSuccess();
      } else {
        onFail();
      }
    })
    .catch(onFail);
};
