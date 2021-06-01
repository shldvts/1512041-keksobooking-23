// Функция, возвращающая случайное целое число из переданного диапазона включительно

let getRandomNumber = function (minNumber, maxNumber) {

  if (minNumber === maxNumber) {
    return console.log('Значения диапазона не могут быть равны между собой.');}
  if (minNumber > maxNumber) {
    return console.log('Начальное значение диапазона должно быть меньше, чем конечное.');}

  return Math.floor(Math.random() * (maxNumber - minNumber) + minNumber);
}

getRandomNumber (0, 0);

// Функция, возвращающая случайное число с плавающей точкой из переданного диапазона включительно.

let getRandomFractional = function (minNumber, maxNumber, numberCut) {

  if (minNumber === maxNumber) {
    return console.log('Значения диапазона не могут быть равны между собой.');}
  if (minNumber > maxNumber) {
    return console.log('Начальное значение диапазона должно быть меньше, чем конечное.');}

  return (Math.random() * (maxNumber - minNumber) + minNumber).toFixed(numberCut);
}

getRandomFractional (0, 0, 0);
