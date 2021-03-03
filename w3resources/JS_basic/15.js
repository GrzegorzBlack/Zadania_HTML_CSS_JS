//15. Write a JavaScript program to get the difference between
//a given number and 13, if the number is greater than 13 return
//double the absolute difference.
const n = 13;

function calculate(number, n) {
  let result;
  if (number > n) {
    return (result = Math.abs((number - n) * 2));
  } else if (number < 0) {
    return (result = n - number);
  } else {
    return (result = n - number);
  }
}

console.log(calculate(-70, n));

console.log(calculate(20, n));

console.log(calculate(10, n));

//Krótsza wersja

function calc(num) {
  if (num <= 13) {
    return 13 - num;
  } else {
    return (num - 13) * 2;
  }
}

console.log(calc(20));
console.log(calc(5));
console.log(calc(-30));
