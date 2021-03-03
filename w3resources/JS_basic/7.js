//7. Write a JavaScript program to find if 1st January is being
//a Sunday between 2014 and 2050.

function check() {
  let array = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  for (let i = 2014; i <= 2050; i++) {
    let date = new Date(i, 0, 1);
    let day = date.getDay();

    //console.log(day);
    let dayOfWeek = array[day];
    //console.log(dayOfWeek);

    if (dayOfWeek === "Sunday") {
      console.log(`In ${i} 1 January is Sunday`);
    } else {
    }
  }
}

check();
