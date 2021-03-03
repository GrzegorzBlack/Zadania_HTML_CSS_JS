// 70. Write a JavaScript program to rotate the elements left of a given
// array of integers of length 3.

function rotate(args) {
  if (args.length === 3) {
    let sum = [args[1], args[2], args[0]];
    return sum;
  } else {
    return "Something went wrong!";
  }
}

console.log(rotate([4, 2, 9]));
