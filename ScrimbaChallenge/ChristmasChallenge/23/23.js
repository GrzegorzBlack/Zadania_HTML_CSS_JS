/*
DESCRIPTION:
We are making a Social Media Character Counter! We want to display the available characters LEFT.
Using the Keydown event should help you here. When the characters reach 20 and below, we want them to turn red. 
So we will use Javascript to add that styling to it. If the characters drop below 0, we want the button to be disabled 
BUT if there are only 0 characters left, we should still be able to tweet.

Keydown, addEventListeners, add and remove a class

Tips:
1. We want to create our variables first
2. Add the event listener
3. Look in the CSS to see what could be used to disable the button
4. Create conditions to check the count of the characters

*/

function writeFunction() {
  console.log("test");
  let text = document.getElementById("string");

  let letters = document.getElementById("counterFooter");
  let btn = document.getElementById("btn");
  letters.innerText = `${140 - text.value.length}/140`;

  if (140 - text.value.length < 20 && 140 - text.value.length >= 0) {
    btn.classList.remove("buttonDisabled");
    letters.style.color = "red";
  } else if (140 - text.value.length > 20) {
    letters.style.color = "white";
  } else if (140 - text.value.length < 0) {
    btn.classList.add("buttonDisabled");
  }
}
