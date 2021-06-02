// Функция, возвращающая случайное целое число из переданного диапазона включительно

const getRandomNumber = function (minNumber, maxNumber) {

  if (minNumber < maxNumber) {
    return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
  }
  console.log('Начальное значение диапазона не должно быть больше (либо равно) конечному.');
};

getRandomNumber (0, 0);

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.

const getRandomFractional = function (minNumber, maxNumber, numberCut) {

  if (minNumber === maxNumber) {
    console.log('Значения диапазона не могут быть равны между собой.');
  }

  if (minNumber > maxNumber) {
    console.log('Начальное значение диапазона должно быть меньше, чем конечное.');
  }

  return (Math.random() * (maxNumber - minNumber) + minNumber).toFixed(numberCut);
};

getRandomFractional (0, 0, 0);
