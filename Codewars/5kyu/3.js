// The marketing team is spending way too much time typing in hashtags.
// Let's help them with our own Hashtag Generator!

// Here's the deal:

//     It must start with a hashtag (#).
//     All words must have their first letter capitalized.
//     If the final result is longer than 140 chars it must return false.
//     If the input or the result is an empty string it must return false.

// Examples

// " Hello there thanks for trying my Kata"  =>  "#HelloThereThanksForTryingMyKata"
// "    Hello     World   "                  =>  "#HelloWorld"
// ""                                        =>  false

function generateHashtag(str) {
  //console.log(str.length);
  if (!str.length || /^\s*$/.test(str)) return false;
  let newStr = str.split(" ");
  console.log(newStr);
  let str2 = newStr
    .map((el) => el.replace(el.charAt(0), el.charAt(0).toUpperCase()))
    .join("");

  str2 = "#" + str2;
  if (str2.length > 140) return false;
  console.log(str2);
  return str2;
}

//console.log(generateHashtag(" Hello there thanks for trying my Kata"));
console.log(generateHashtag("          "));
