//67. Write a JavaScript program to create a new string from a given string,
// removing the first and last characters of the string if the first or last
// character are 'P'. Return the original string if the condition is not satisfied.

function create(str) {
  let first = str.substring(0, 1);
  let last = str[str.length - 1];
  // console.log(first);
  // console.log(last);
  if (first === "P" && last === "P") {
    let result = str.substring(1, str.length - 1);
    return result;
  } else if (first === "P") {
    return str.slice(1);
  } else if (last === "P") {
    return str.slice(0, str.length - 1);
  } else {
    return str;
  }
}

console.log(create("Python"));
