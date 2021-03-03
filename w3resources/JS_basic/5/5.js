//5. Write a JavaScript program to rotate the string 'w3resource' in right direction by periodically
// removing one letter from the end of the string and attaching it to the front.

//let word = document.getElementById("word");
// let wordDiv = word.textContent;

let wordDiv = "w3resource";

function animation() {
  let array = wordDiv.split(/\s+/);

  //array = wordDiv.split(/\s+/);
  console.log(array);
  //console.log(array[0]);
  //typeof array[1];

  if (array.length === 1) {
    wordDiv = wordDiv.split("");
  } else if (array[0] === "w3resource") {
    wordDiv = array[0].split("");
    console.log(wordDiv);
  } else {
    console.log(wordDiv);

    wordDiv = array[1].split("");
    //wordDiv = wordDiv.split();
    console.log(wordDiv);
  }

  let letter = wordDiv.slice(wordDiv.length - 1);
  let wordDivNew = wordDiv.slice(0, wordDiv.length - 1);

  //console.log(letter);
  console.log(wordDivNew);
  if (array.length === 1) {
    wordDiv.unshift(" ");
    console.log(wordDiv);
    wordDiv.unshift(letter.toString());
    //console.log(wordDiv);
    array = wordDiv.slice(0, 2);
    console.log(array);
    go();
  } else if (array[2] === [" "]) {
    array = array.slice(0, 2);
    array.unshift(letter);
    go();
  } else if (array[0] === "w3resource") {
    console.log(array);

    //array = array.slice(0, 0);
    wordDiv.unshift(" ");
    //wordDiv.unshift(letter);
    console.log(wordDiv);

    wordDiv.join("");
    console.log(wordDiv);
  } else {
    array = array.slice(0, 2);
    array.unshift(letter);
    go();
  }

  //console.log(array);
  //letter = letter.join();
  //array.unshift(letter);
  function go() {
    array = array.concat(wordDivNew).join("");
    wordDiv = array;
    console.log(array);
    //return wordDiv;
  }
}

//animation();

setInterval(animation, 1000);
