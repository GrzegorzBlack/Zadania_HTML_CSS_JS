// 63. Write a JavaScript program to create a string using the middle three
//characters of a given string of odd length. The string length must be
// greater or equal to three.

function create(str) {
  if (str.lenght % 2 === 0) {
    return "Liczba liter musi być nieparzysta!";
  } else if (str.length >= 3) {
    let middleIndex = Math.round((str.length - 1) / 2);
    console.log(middleIndex);
    let newStr = str[middleIndex - 1] + str[middleIndex] + str[middleIndex + 1];
    return newStr;
  } else {
    return "Wyraz jest za krótki!";
  }
}

console.log(create("nieparzysty"));
