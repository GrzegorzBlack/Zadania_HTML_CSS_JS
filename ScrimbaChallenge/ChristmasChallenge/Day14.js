//Given an array of integers, find the maximal absolute
//between the two of it's adjacent element's

function arrayMaximalAdjacentDifference(nums) {
  let array = [];

  for (let i = 0; i < nums.length; i++) {
    let elementChecking = nums[i];

    let diverenceLeft = Math.abs(
      Math.abs(elementChecking) - Math.abs(nums[i - 1])
    );
    //console.log(!isNaN(diverenceLeft));
    //console.log(diverenceLeft);

    if (!isNaN(diverenceLeft)) {
      array.push(diverenceLeft);
      console.log(array);
    }

    let diverenceRight = Math.abs(
      Math.abs(elementChecking) - Math.abs(nums[i + 1])
    );

    //console.log(diverenceRight !== NaN);
    if (!isNaN(diverenceRight)) {
      array.push(diverenceRight);
    }

    //console.log(array);
  }
  //console.log(array);
  let max = Math.max(...array);
  return max;
}

const nums = [2, 4, 1, 0];

// act
const result = arrayMaximalAdjacentDifference(nums);

// log
console.log("result 1: ", result);

// arrange
const nums2 = [2, 9, 1, 0];

// act
const result2 = arrayMaximalAdjacentDifference(nums2);

// log
console.log("result 2: ", result2);
