function extractEachKth(nums, index) {
  let filtered = nums.filter((item, x) => !(x % 3 == 3 - 1));

  console.log(filtered);
}

const nums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const index = 3;

// act
const result = extractEachKth(nums, index);

// log
console.log("result: ", result);
