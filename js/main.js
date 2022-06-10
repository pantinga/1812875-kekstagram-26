function getRandomIntFromRange(min, max) {
  min = Math.ceil(min); // вычисляет и возвращает наименьшее целое число, которое больше или равно переданному числу (округляет число вверх)
  max = Math.floor(max); // вычисляет и возвращает наибольшее целое число, которое меньше или равно переданному числу (округляет число вниз)
  return Math.floor(Math.random() * (max - min)) + min;
}
getRandomIntFromRange(0, 100);

//источник https://basicweb.ru/javascript/js_math_random.php

const MaxLength = 140;
function stringMaxLength(str, max) {
  if(str.length<=max)
  { return true; }
  return false;
}
stringMaxLength('Введёный текст', MaxLength);
