//10. Write a JavaScript program to calculate multiplication
//and division of two numbers (input from user).

const button1 = document.getElementById("button1");
const button2 = document.getElementById("button2");

//const number1 = document.getElementById("input1").value;
//const number2 = document.getElementById("input2").value;

//const result = document.getElementById("result");

function multi() {
  event.preventDefault();
  console.log("test");

  let number1 = document.getElementById("input1").value;
  let number2 = document.getElementById("input2").value;
  let result = document.getElementById("result");

  let numberLast = number1 * number2;
  console.log(numberLast);
  result.innerText = numberLast;
}

function divide(a, b) {
  return a / b;
}

button1.addEventListener("click", () => multi());
//button2.addEventListener("click", console.log("sra"));
