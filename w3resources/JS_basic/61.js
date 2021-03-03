// 61. Write a JavaScript program to concatenate two strings except
//their first character.

function concatenate(str1, str2) {
  let newStr1 = str1.substring(1);
  let newStr2 = str2.substring(1);

  let finalStr = newStr1 + newStr2;
  return finalStr;
}

console.log(concatenate("java", "python"));
