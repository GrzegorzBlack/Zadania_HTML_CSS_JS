//Given the array of integers for each position i,
//search among the previous positions for the last(from the left)
//position that contains a smaller value. Store that value at position i
//in the answer. If no such value can be found, store -1 instead.

function arrayPreviousLess(nums) {
  //  write code here.
  let array = [];
  for (let i = 0; i < nums.length; i++) {
    if (nums[i - 1] < nums[i]) {
      let number = nums[i - 1];
      console.log(number);
      array.unshift(number);
      console.log(array);
    } else {
      let one = -1;
      array.unshift(one);
      console.log(array);
    }
  }

  array.reverse();
  console.log(array);
  return array;
}

// arrange
const nums = [3, 5, 2, 4, 5];

// act
const result = arrayPreviousLess(nums);

// log
console.log("result: ", result);
