// 53. Write a JavaScript program to check whether the
// characters a and b are separated by exactly 3 places
//  anywhere (at least once) in a given string.

function program(string) {
  let array = string.split("");
  console.log(array);

  let letterA;
  let letterB;
  for (let i = 0; i < array.length; i++) {
    console.log(array[i]);

    if (array[i] == "a") {
      letterA = i;
    } else if (array[i] == "b") {
      letterB = i;
    }
  }
  if (Math.abs(letterA - letterB) === 4) {
    return true;
  } else if (!letterA || !letterB || Math.abs(letterA - letterB) !== 4) {
    return false;
  }
}

console.log(program("arkebuz"));

// A wystarczyło funkcję test użyć, coś nowego się nauczylem :)

// (/a...b/).test(string) || (/b...a/).test(string)
