//4. Write a JavaScript program to find the area of a triangle where lengths of the three of its sides are 5, 6, 7.

let side1 = 5;
let side2 = 6;
let side3 = 7;

let areaHalf = (side1 + side2 + side3) / 2;

let area = Math.sqrt(
  areaHalf * (areaHalf - side1) * (areaHalf - side2) * (areaHalf - side3)
);

console.log(area);
