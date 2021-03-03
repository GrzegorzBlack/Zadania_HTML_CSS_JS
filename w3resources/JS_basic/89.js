// 89. Write a JavaScript program to check whether it is possible to replace $ in a
// given expression x $ y = z with one of the four signs +, -, * or / to obtain
// a correct expression.
// For example x = 10, y = 30 and z = 300, we can replace $ with a multiple operator (*)
// to obtain x * y = z

function program(x, y, z) {
  if (x + y === z) {
    return "replace with '+'";
  } else if (x - y === z) {
    return "replace with '-'";
  } else if (x * y === z) {
    return "replace with '*'";
  } else if (x / y === z) {
    return "replace with '/'";
  } else {
    return "can't replace!";
  }
}

console.log(program(10, 30, 300));
