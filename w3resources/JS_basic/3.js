//3. Write a JavaScript program to get the current date.
//Expected Output :
//mm-dd-yyyy, mm/dd/yyyy or dd-mm-yyyy, dd/mm/yyyy

function dateFunck() {
  let date = new Date();

  console.log(date);

  let month = date.getMonth() + 1;
  let day = date.getDate();
  let year = date.getFullYear();

  console.log(`Current date: ${month}/${day}/${year}`);
}

dateFunck();
