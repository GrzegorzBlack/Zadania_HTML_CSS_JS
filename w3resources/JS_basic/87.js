// 87. Write a JavaScript program to check whether two arrays of integers of
//same length are similar or not. The arrays will be similar if one array
//can be obtained from another array by swapping at most one pair of elements.

function chech(arr1, arr2) {
  let similar = true;
  for (let i = 0; i < arr1.length; i++) {
    if (arr1[i] !== arr2[i]) {
      let num1 = arr2[i]; //30
      similar = false;
      for (let j = i; j < arr2.length; j++) {
        if (arr1[i] == arr2[j]) {
          console.log(arr1[i]);
          let num2 = arr2[j]; //15

          arr2[i] = num2;
          arr2[j] = num1;
          similar = true;
          console.log(arr2[i]);
          console.log(arr2[j]);
          console.log(arr2);
        }
      }
    }
  }

  // function prog(el, index) {
  //   if (el !== arr2[index]) {
  //     similar = false;
  //   }
  // }

  // arr1.map((el, index) => {
  //   prog(el, index);
  // });

  return similar;
}

console.log(chech([5, 10, 15, 20, 30], [5, 10, 30, 20, 15]));
