//Check if given string is correct representation of the 24 hour clock.

function validTime(str) {
  //  write code here.
  let array = str.split(":");

  let number1 = parseInt(array.slice(0, 1));
  let number2 = parseInt(array.slice(1));

  if (number1 <= 24 && number2 <= 60) {
    return true;
  }
  return false;
}

/**
 * Test Suite
 */

// arrange
const str1 = "13:58";

// act
const result1 = validTime(str1);

// log
console.log("result 1: ", result1);

// arrange
const str2 = "25:51";

// act
const result2 = validTime(str2);

// log
console.log("result 2: ", result2);

// arrange
const str3 = "02:76";

// act
const result3 = validTime(str3);

// log
console.log("result 3: ", result3);
