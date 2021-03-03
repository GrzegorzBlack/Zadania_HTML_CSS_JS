// 11. Write a JavaScript program to convert temperatures to and
// from Celsius, Fahrenheit.
// [ Formula : c/5 = (f-32)/9 [ where c = temperature in Celsius
// and f = temperature in Fahrenheit ]

function converter(tempNumber, convertTo) {
  if (convertTo === "Fahrenheit") {
    let number = (tempNumber / 5) * 9 + 32;
    let result = `${number}°F`;
    return result;
  } else if (convertTo === "Celsius") {
    let number = ((tempNumber - 32) / 9) * 5;
    let result = `${number}°C`;
    return result;
  } else {
    console.log("Something went wrong!");
  }
}

let temp = converter(60, "Fahrenheit");
console.log(temp);

let temp2 = converter(140, "Celsius");
console.log(temp2);
