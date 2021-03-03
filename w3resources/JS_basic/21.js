// 21. Write a JavaScript program to create a new string adding "Py" in front of a given string.
// If the given string begins with "Py" then return the original string.

function addString(string) {
  let stringToAdd = "Py";
  let newString;
  let twoLetters = string.slice(0, 2);

  if (stringToAdd === twoLetters) {
    return string;
  } else {
    return (newString = `${stringToAdd}${string}`);
  }
}

console.log(addString("zza"));

console.log(addString("Pyzza"));

console.log(addString("pirania"));
