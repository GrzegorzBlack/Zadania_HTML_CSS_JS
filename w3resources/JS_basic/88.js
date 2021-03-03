// 88. Write a JavaScript program to check whether two given integers are similar or not,
//if a given divisor divides both integers and it does not divide either.

function check(num1, num2, divisor) {
  if (
    (num1 % divisor === 0 && num2 % divisor === 0) ||
    (num1 % divisor === 0 && num2 % divisor !== 0)
  ) {
    return true;
  } else {
    return false;
  }
}

console.group(check(20, 25, 5));
