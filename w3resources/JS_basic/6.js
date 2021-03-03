//6. Write a JavaScript program to determine whether a given
//year is a leap year in the Gregorian calendar.

function checkYear(year) {
  if (year / 4 || (year / 100 && year / 400)) {
    console.log(`Rok ${year} jest rokiem przestępnym`);
  } else {
    console.log(`Rok ${year} nie jest rokiem przestępnym`);
  }
}

checkYear(1996);
