//36. Write a JavaScript program to check whether the last digit
// of the three given positive integers is same.

function checkNum(x, y, z) {
  let xString = `${x}`;
  let yString = `${y}`;
  let zString = `${z}`;

  if (
    xString[xString.length - 1] === yString[yString.length - 1] &&
    yString[yString.length - 1] === zString[zString.length - 1]
  ) {
    return true;
  } else {
    return false;
  }
}

console.log(checkNum(20, 300, 40));
console.log(checkNum(20, 305, 40));
console.log(checkNum(20, 300, 0));
