//14. Write a JavaScript exercise to get the extension of a filename.

function extension(string) {
  let result;
  let array = string.split(".");
  console.log(array);

  result = array[1];
  console.log(result);
}

extension("hot_teens_sex.mp4");
