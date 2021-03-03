//check whether the given string is a subsequence
//of the plaintext alphabet

function alphabetSubsequence(str) {
  //  write code here.
  let alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  let newStr = str.split("");
  console.log(newStr);

  let unique = newStr.filter((v, i, a) => a.indexOf(v) === i);

  console.log(unique);
  if (newStr.length === unique.length) {
    for (let i = 0; i < newStr.length; i++) {
      let letterStr = newStr[i];
      console.log(letterStr);
      let letterNext = newStr[i + 1];
      console.log(letterNext);
      let a = alphabet.indexOf(letterStr);
      let b = alphabet.indexOf(letterNext);
      if (b > a) {
      } else if (i === newStr.length - 1) {
      } else {
        return false;
      }
    }
  } else {
    return false;
  }

  return true;
}

// arrange
const str1 = "effg";

// act
const result1 = alphabetSubsequence(str1);

// log
console.log("result 1: ", result1);

// arrange
const str2 = "cdce";

// act
const result2 = alphabetSubsequence(str2);

// log
console.log("result 2: ", result2);

// arrange
const str3 = "ace";

// act
const result3 = alphabetSubsequence(str3);

// log
console.log("result 3: ", result3);
