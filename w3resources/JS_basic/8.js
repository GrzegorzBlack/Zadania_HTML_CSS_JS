//8. Write a JavaScript program where the program takes a random integer
//between 1 to 10, the user is then prompted to input a guess number.
//If the user input matches with guess number, the program will display
//a message "Good Work" otherwise display a message "Not matched".

function guessANumber() {
  let number = Math.floor(Math.random() * 10 + 1);
  let result = prompt("What is your number");

  if (number == result) {
    console.log("Zgadłeś liczbę, brawo!");
  } else {
    console.log("Niestety, nie zgadłeś");
  }
}

guessANumber();
