//57. Write a JavaScript program to create a new string of
// specified copies (positive number) of a given string.

function create(string, x) {
  let newStr = "";
  let flag = 0;
  while (flag < x) {
    newStr = newStr + string;
    flag++;
  }
  return newStr;
}

console.log(create("ula", 4));

// Krótsz wersja to użycie funkcji repeat() - teraz już wiem
