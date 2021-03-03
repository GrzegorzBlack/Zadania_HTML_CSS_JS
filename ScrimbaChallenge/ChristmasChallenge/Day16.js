//Transform a given sentence into a new one with dashes
//between two consecutive letters

function insertDashes(arr) {
  // write code here
  let array = arr.split("");
  console.log(array);

  function check(array) {
    let letter = "-";
    //let letters = "abcdefghijklmnopqrstuvwxyz";
    for (let i = 0; i < array.length; i++) {
      let next = array[i + 1];
      if (
        array[i].match(/\p{General_Category=Letter}/gu) &&
        next &&
        next !== " "
      ) {
        console.log("test");
        array[i] = array[i] + letter;
      }
    }
  }

  check(array);
  let result;
  result = array.join("");
  return result;
}

// arrange
const value = "aba caba";

// act
const result = insertDashes(value);

// log
console.log("result: ", result);
