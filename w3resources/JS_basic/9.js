//Write a JavaScript program to calculate days left
//until next Christmas

let xmas = new Date("12/24/2020");

let date = new Date();

let difference = xmas.getTime() - date.getTime();
console.log(difference);

let days = Math.round(difference / (60 * 60 * 24 * 1000));

console.log(days);
