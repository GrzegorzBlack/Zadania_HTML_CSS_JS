// Complete the function scramble(str1, str2) that returns true if a portion of str1 characters
// can be rearranged to match str2, otherwise returns false.

// Notes:

//     Only lower case letters will be used (a-z). No punctuation or digits will be included.
//     Performance needs to be considered

// Input strings s1 and s2 are null terminated.

// Examples

// scramble('rkqodlw', 'world') ==> True
// scramble('cedewaraaossoqqyt', 'codewars') ==> True
// scramble('katas', 'steak') ==> False

function scramble(str1, str2) {
  //code me
  if (s1.length < s2.length) return false;
  let a = str2.split("");
  let b = str1.split("");
  //console.log(a);
  let res = "";
  let flag = false;

  for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < b.length; j++) {
      //console.log(a[i]);
      //console.log(b[j]);
      if (a[i] === b[j]) {
        res = res + a[i];
        console.log(res);
        b.splice(j, 1);
        break;
      }
    }
  }
  if (res === str2) {
    flag = true;
  }
  return flag;
}

//console.log(scramble("rkqodlw", "world"));
console.log(scramble("cedewaraaossoqqyt", "codewars"));
console.log(scramble("jscripts", "javascript"));
