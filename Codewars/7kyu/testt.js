// function highAndLow(numbers) {
//   numbers = numbers.split(" ");
//   console.log(numbers);
//   console.log(...numbers);
//   return Math.max(...numbers) + " " + Math.min(...numbers);
// }

// console.log(highAndLow("4 5 29 54 4 0 -214 542 -64 1 -3 6 -6"));

// function iqTest(numbers) {
//   var nums = numbers.split(" ").map((x) => x % 2);
//   console.log(nums);
//   var sum = nums.reduce((a, b) => a + b);
//   var target = sum > 1 ? 0 : 1;

//   return nums.indexOf(target) + 1;
// }

// console.log(iqTest("2 4 7 8 10"));
// console.log(iqTest("1 8 10"));

function solution(s) {
  return (s + "_").match(/.{2}/g) || [];
}

console.log(solution("abcd"));
