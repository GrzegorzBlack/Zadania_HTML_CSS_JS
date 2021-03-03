//1. Write a JavaScript program to display the current day and time in the following format.
//Sample Output : Today is : Tuesday.
//Current time is : 10 PM : 30 : 38

function date() {
  let data = new Date();
  console.log(data);

  let dataHour = data.getHours();
  let dataMinutes = data.getMinutes();
  let dataSeconds = data.getSeconds();

  function check(x) {
    if (x === 24) {
      return `00`;
    }

    return `${x - 12} PM`;
  }

  let realDataHour = dataHour > 12 ? check(dataHour) : `${dataHour} AM`;

  let day = data.getDay();
  let array = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  console.log(realDataHour);
  console.log(dataMinutes);

  console.log(dataSeconds);

  console.log(`Today is: ${array[day]}`);
  console.log(
    `Current time is: ${realDataHour} : ${dataMinutes} : ${dataSeconds}`
  );
}

date();
