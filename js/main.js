// Функция, возвращающая случайное целое число из переданного диапазона включительно

const getRandomNumber = (min, max) => {
  if (min >= 0 && max >= 0) {
    if (min === max) {
      throw new RangeError('Значения диапазона не могут быть равны друг другу!');
    }
    if (min > max) {
      const changePosition = min;
      min = max;
      max = changePosition;
    }
    return Math.floor(Math.random() * (max - min) + min);
  }
  throw new RangeError('Диапазон может быть только положительный!');
};

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.

const getRandomFloat = (min, max, digit) => {
  if (min >= 0 && max >= 0) {
    if (min === max) {
      throw new RangeError('Значения диапазона не могут быть равны друг другу!');
    }
    if (min > max) {
      const changePosition = min;
      min = max;
      max = changePosition;
    }
    return (Math.random() * (max - min) + min).toFixed(digit);
  }
  throw new RangeError('Диапазон может быть только положительный!');
};

getRandomNumber (0, 0);
getRandomFloat (0, 0, 0);
