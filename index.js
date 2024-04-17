/**
 * Написати функцію, яка приймає два значеня і повертає більше значення, якщо значення одного типу, в усіх інших випадках повертає null
 * @param {any} value1
 * @param {any} value2
 * @returns value1, if the data types are the same and value1>value2
 * @returns value2, if the data types are the same and value2>value1
 * @returns null, in other cases
 */
const getGreaterValueOrNull = function (value1, value2) {
  if (typeof value1 === typeof value2 && value1 > value2) {
    return value1;
  }
  if (typeof value1 === typeof value2 && value2 > value1) {
    return value2;
  }
  return null;
};
console.log(getGreaterValueOrNull(50, 30));

/**Написати функцію, яка просить користувача ввести число і виводить повідомлення яке він число ввів: "додатнє", "нуль" або "від'ємне", або виводить повідомлення "це не число"
 * @param {number} number
 * @returns string
 */
const checkNumber = function () {
  let number = prompt("Ведіть число");

  if (isNaN(Number(number))) {
    return "це не число";
  }
  if (Number(number) > 0) {
    return "додатнє";
  }
  if (Number(number) === 0) {
    return "нуль";
  }
  if (Number(number) < 0) {
    return "від`ємне";
  }
};


// alert(checkNumber())

/**
 * Написати функцію, яка приймає параметром число і перевіряє чи є це число дільником 100. Повертає булеве значення.
 * @param {number} number
 * @returns true, false
 */
const isDivisibleBy100 = function (number, CONSTANTA=100) {
  {
    return number % CONSTANTA === 0;
  }
};
console.log(isDivisibleBy100(500));

// //Написати функцію, яка перевіряє можливість існування трикутника.
// Функція приймає три числа - сторони трикутника, повертає булеве значення. Значення за замовчуванням 3,4,5.
// Трикутник існує тоді і тільки тоді, коли сума довжин будь-яких двох його сторін більша за третю.
/**
 * 
 * @param {number} a 
 * @param {number} b 
 * @param {number} c 
 * @returns boolean;
 */
const isTrianglePossible = function (a = 3, b = 4, c = 5){
  return a+b>c && a+c>b && b+c>a;

}
console.log (isTrianglePossible(10, 2, 10))