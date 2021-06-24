// Функция получения случайного целого числа из заданного диапазона
export const getRandomNumber = (min, max) => {
  const lower = Math.ceil(Math.min(Math.abs(min), Math.abs(max)));
  const upper = Math.floor(Math.max(Math.abs(min), Math.abs(max)));
  const result = Math.random() * (upper - lower + 1) + lower;
  return Math.floor(result);
};

// Функция получения случайного числа с плавающей точкой из заданного диапазона
export const getRandomFloat = (min, max, digit) => {
  const lower = Math.min(Math.abs(min), Math.abs(max));
  const upper = Math.max(Math.abs(min), Math.abs(max));
  const result = Math.random() * (upper - lower) + lower;
  return Number(result.toFixed(digit));
};

// Функция вывода произвольного элемента массива
export const getRandomArrayItem = (items) => items[getRandomNumber(0, items.length - 1)];

// Функция создания нового массива со всеми элементами, прошедшими проверку, задаваемую в передаваемой функции
export const getRandomArrayItems = (items) => items.filter(() => Boolean(getRandomNumber(0, 1)));

