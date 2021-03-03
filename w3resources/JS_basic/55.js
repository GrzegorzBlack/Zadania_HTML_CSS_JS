// Write a JavaScript program to check whether a
//given string contains equal number of p's and t's

function equal(str) {
  //let string = str.split("")

  let array = Array.from(str);

  let numberPs = array.filter((el) => "p".includes(el)).length;
  let numberTs = array.filter((el) => "t".includes(el)).length;

  if (numberPs === numberTs) {
    return "Equal number";
  } else {
    return "Not equal";
  }
}

console.log(equal("aptttsaapstspppts"));
