// You have two integer arrays, a and b, and an integer target
// value v. Determine whether there is a pair of numbers, where one
// number is taken from a and the other from b, that can be added
// together to get a sum of v. If yes return tru, if no return false

function sumOfTwo(nums1, nums2, value) {
  //  write code here.
  let check = false;
  nums1.forEach((element) => {
    for (let i = 0; i < nums2.length; i++) {
      if (element + nums2[i] === value) {
        console.log("True");
        return (check = true);
      }
    }
  });

  return check;
}

// arrange
const nums1 = [1, 2, 3];
const nums2 = [10, 20, 30, 40];
const value = 42;

// act
const result = sumOfTwo(nums1, nums2, value);

// log
console.log("result: ", result);
