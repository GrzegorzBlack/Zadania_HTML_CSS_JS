// 82. Write a JavaScript to add two positive integers without carry.

function carry(int1, int2) {
  let array1 = Array.from(int1.toString()).map(Number);

  let array2 = Array.from(int2.toString()).map(Number);

  let result = array1.map((el, index) => el + array2[index]);

  let newArray = [];

  for (let i = 0; i < result.length; i++) {
    if (result[i] >= 10) {
      newArray.push(Number(result[i].toString().split("").slice(1)));
    } else {
      newArray.push(result[i]);
    }
  }

  return newArray;
}

console.log(carry(152, 295));
