// 86. Write a JavaScript program to find the types of a given angle.
// Types of angles:
// Acute angle: An angle between 0 and 90 degrees.
// Right angle: An 90 degree angle.
// Obtuse angle: An angle between 90 and 180 degrees.
// Straight angle: A 180 degree angle.

function wahtType(angle) {
  if (angle >= 0 && angle < 90) {
    console.log("Type of angle: acute angle");
  } else if (angle === 90) {
    console.log("Type of angle: Right angle");
  } else if (angle > 90 && angle < 180) {
    console.log("Type of angle: Obtuse angle");
  } else if (angle === 180) {
    console.log("Type of angle: Straight angle");
  } else {
    console.log(`Sorry, wrong angle`);
  }
}

console.log(wahtType(91));
