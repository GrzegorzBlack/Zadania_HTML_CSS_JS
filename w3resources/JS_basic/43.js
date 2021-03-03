// 43. Write a JavaScript program to check from three given
// numbers (non negative integers) that two or all of them have
// the same rightmost digit.

function play(x, y, z) {
  let stringX = `${x}`;
  let stringY = `${y}`;
  let stringZ = `${z}`;

  let digitX = stringX[stringX.length - 1];
  let digitY = stringY[stringY.length - 1];
  let digitZ = stringZ[stringZ.length - 1];

  if (digitX === digitY && digitY === digitZ) {
    return "All of integers have teh same last digit";
  } else if (digitX === digitY || digitX === digitZ) {
    return "Two of the integers have the same last digit";
  } else if (digitX === digitY || digitY === digitZ) {
    return "Two of the integers have the same last digit";
  } else {
    return "The are no same last digits";
  }
}

console.log(play(30, 56, 30));
