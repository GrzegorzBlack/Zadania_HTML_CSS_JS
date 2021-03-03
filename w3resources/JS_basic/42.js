// 42. Write a JavaScript program to check whether three given numbers
//are increasing in strict mode or in soft mode.
// Note: Strict mode -> 10, 15, 31 : Soft mode -> 24, 22, 31 or 22, 22, 31

function mode(x, y, z) {
  if (x < y && y < z) {
    return "stric mode";
  } else if (x < z) {
    return "soft mode";
  } else {
    return "no mode";
  }
}

console.log(mode(5, 4, 9));
