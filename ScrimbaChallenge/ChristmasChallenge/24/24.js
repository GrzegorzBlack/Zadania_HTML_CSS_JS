//24. Make a counter that increments every 75 miliseconds
// in the spin() function and display whether the
// player wins or loses in the stop() function.

//HINT: ONLY EDIT THE SPIN() AND STOP() FUNCTIONS

//globals
var pushed = false; //Has the stop button been pushed - false is default
var targetInt; //The target number to stop the wheel on
var spinningElem = document.getElementById("spinning"); //The spinning number

//event listener
document
  .getElementById("buttonPressed")
  .addEventListener("click", buttonPressed);

//When the stop button is pushed
function buttonPressed() {
  pushed = true;
}

//set the target Int
function setTargetInt() {
  var targetElem = document.getElementById("targetNum");
  targetInt = Math.floor(Math.random() * 101);
  targetElem.innerHTML = targetInt;
}

//sleep const
const sleep = (milliseconds) => {
  return new Promise((resolve) => setTimeout(resolve, milliseconds));
};

//EDIT THIS FUNCTION
const spin = async () => {
  //WRITE YOUR CODE HERE
  let number = 0;
  while (number < 101) {
    spinningElem.innerHTML = number;
    await sleep(75);

    if (pushed) {
      stop(number);
      break;
    } else if (number === 100) {
      spinningElem.innerHTML = number;
      stop(number);
      break;
    } else {
      number++;
    }
  }

  //stop(number); //Trigger this function when the STOP button has been pushed
  //await sleep(75); //Paste this wherever you need to sleep the incrimentor
};

//EDIT THIS FUNCTION
function stop(i) {
  //WRITE YOUR CODE HERE
  var result = document.getElementById("result"); //display your result message here
  pushed = false;
  if (i === targetInt) {
    result.innerHTML = `You won!`;
  } else {
    let difference = Math.abs(targetInt - i);
    result.innerHTML = `Oh no,You loose! Off by ${difference}`;
  }
}
//main
setTargetInt();
spin();
