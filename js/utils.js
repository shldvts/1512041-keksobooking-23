const KEYBOARD_KEYS = [
  'Escape',
  'Esc',
];

export const isEscEvent = (evt) => KEYBOARD_KEYS.includes(evt.key);

export const removeElement = (element) => element.remove();

export const pluralize = (value, one, two, five) => {
  const mod100 = Math.abs(value % 100);
  if (mod100 > 10 && mod100 < 20) {
    return five;
  }

  const mod10 = mod100 % 10;
  if (mod10 > 1 && mod10 < 5) {
    return two;
  }

  return mod10 === 1 ? one : five;
};

export const debounce = (callback, timeoutDelay) => {
  let timeoutId;

  return (...rest) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => callback.apply(this, rest), timeoutDelay);
  };
};
