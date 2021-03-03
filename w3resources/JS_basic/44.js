// 44. Write a JavaScript program to check from three given integers that
// whether a number is greater than or equal to 20 and less than one of the others.

function checkIntegers(x, y, z) {
  if ((x >= 20 && x < y) || x < z) {
    return "true";
  } else if ((y >= 20 && y < x) || y < z) {
    return "true";
  } else if ((z >= 20 && z < x) || z < y) {
    return "true";
  } else {
    return "false";
  }
}

console.log(checkIntegers(19, 23, 25));
