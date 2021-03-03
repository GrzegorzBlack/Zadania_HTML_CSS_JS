const mainContainer = document.getElementById("main-container");
const equationField = document.getElementById("equation-field");
const solveButton = document.getElementById("solve-button");
const solutionDisplay = document.getElementById("solution-display");

let firstNum = document.querySelector("#first");
let operator = document.querySelector("#operator");
let secondNum = document.querySelector("#second");
let equalIcon = document.querySelector("#equal");
let solutionField = document.querySelector("#solution-field");
let allSolutionFields = document.querySelectorAll(".solution");
const resetBtn = document.querySelector(".btn-reset");

solveButton.addEventListener("click", function () {
  // Clears the solution contents on each click
  console.log(equationField.value);

  var newDiv = document.getElementById("solution_style");
  if (!newDiv) {
    newDiv = document.createElement("div");
    newDiv.setAttribute("id", "solution_style");
  }

  // solutionDisplay.parentNode.removeChild(newDiv);
  // newDiv = document.createElement("div");
  // newDiv.setAttribute("id", "solution_style");

  let value = equationField.value;
  let val = equationField.value.toString();

  let newV = val.split("");
  let final;

  let exitValue = `${newV[0]} + ${newV[2]}`;

  if (newV[1] == "+") {
    final = parseInt(newV[0]) + parseInt(newV[2]);
    console.log(final);
    equationField.value = `${newV[0]} + ${newV[2]}`;
    //solutionDisplay.appendChild(newDiv);
    firstNum.innerHTML = `${newV[0]}`;
    secondNum.innerHTML = `${newV[2]}`;
    operator.innerHTML = "+";
    equalIcon.innerHTML = "=";
    allSolutionFields.forEach((solutionField) => {
      solutionField.style.display = "block";
    });
    solutionField.innerHTML = final;

    //newDiv.innerHTML = final;
  } else if (newV[1] == "-") {
    final = parseInt(newV[0]) - parseInt(newV[2]);
    console.log(final);
    equationField.value = `${newV[0]} - ${newV[2]}`;
    firstNum.innerHTML = `${newV[0]}`;
    secondNum.innerHTML = `${newV[2]}`;
    operator.innerHTML = "-";
    equalIcon.innerHTML = "=";
    allSolutionFields.forEach((solutionField) => {
      solutionField.style.display = "block";
    });
    solutionField.innerHTML = final;
  } else if (newV[1] == "*") {
    final = parseInt(newV[0]) * parseInt(newV[2]);
    console.log(final);
    equationField.value = `${newV[0]} * ${newV[2]}`;
    firstNum.innerHTML = `${newV[0]}`;
    secondNum.innerHTML = `${newV[2]}`;
    operator.innerHTML = "*";
    equalIcon.innerHTML = "=";
    allSolutionFields.forEach((solutionField) => {
      solutionField.style.display = "block";
    });
    solutionField.innerHTML = final;
  } else if (newV[1] == "/") {
    final = parseInt(newV[0]) / parseInt(newV[2]);
    console.log(final);
    equationField.value = `${newV[0]} / ${newV[2]}`;
    firstNum.innerHTML = `${newV[0]}`;
    secondNum.innerHTML = `${newV[2]}`;
    operator.innerHTML = "/";
    equalIcon.innerHTML = "=";
    allSolutionFields.forEach((solutionField) => {
      solutionField.style.display = "block";
    });
    solutionField.innerHTML = final;
  } else {
    return "Coś nie działa";
  }

  // Write your code here 👇
});

resetBtn.addEventListener("click", function () {
  allSolutionFields.forEach((el) => (el.style.display = "none"));
  document.querySelector("#equation-field").value = "";
});
