// Given a string, find a number of different characters in it

function differentSymbolsNaive(str) {
  //  write code here.
  let strArray = str.split("");
  let newArray = [];

  while (strArray.length > 0) {
    for (let i = 0; i < strArray.length; i++) {
      newArray.push(strArray[i]);
      console.log(newArray);
      strArray = strArray.filter((el) => el !== strArray[i]);
      console.log(strArray);
    }
  }

  let number = newArray.length;
  return number;
}

// arrange
const str = "cabcacaa";

// act
const result = differentSymbolsNaive(str);

// log
console.log("result: ", result);

//Alternatiive route

function differentSymbolsNaive2(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (!str.includes(str[i], i + 1)) {
      count++;
    }
  }
  return count;
}

let be = differentSymbolsNaive2("abcdddcca");

console.log(be);
