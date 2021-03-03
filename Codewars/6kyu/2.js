// Complete the solution so that it splits the string into pairs of two characters.
//  If the string contains an odd number of characters then it should replace
//  the missing second character of the final pair with an underscore ('_').

// Examples:

// solution('abc') // should return ['ab', 'c_']
// solution('abcdef') // should return ['ab', 'cd', 'ef']

function solution(str) {
  let newStr = str.match(/.{1,2}/g);
  //console.log(newStr[newStr.length - 1]);
  //let last = newStr[newStr.length - 1];
  if (newStr === null) {
    newStr = [];
    return newStr;
  } else {
    newStr[newStr.length - 1].length === 1
      ? (newStr[newStr.length - 1] = newStr[newStr.length - 1] + "_")
      : newStr[newStr.length - 1];

    return newStr;
  }
}

//console.log(solution("abcdefg"));
console.log(solution(""));

// Inne rozwiazanie (nie moje):

// function solution(s) {
//     return (s + "_").match(/.{2}/g) || [];
//   }

//   console.log(solution("abcd"));
