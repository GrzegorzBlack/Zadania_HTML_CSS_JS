// javascript

const leftBtn = document.querySelector(".previous");
const rightBtn = document.querySelector(".next");

const gallery = document.querySelector(".gallery");

let initial = 0;

function clickLeft() {
  //console.log('working')
  initial = initial + 220;
  //console.log(initial)
  gallery.style.transform = "translateX(" + initial + "px)";
  console.log("left");
  console.log(initial);
  rightBtn.classList.remove("disabled");
  if (initial === 0) {
    leftBtn.classList.add("disabled");
    leftBtn.style.opacity = "0.3";
    console.log("working");
  }
}

function clickRight() {
  initial = initial + -220;
  gallery.style.transform = "translateX(" + initial + "px)";
  leftBtn.classList.remove("disabled");
  leftBtn.style.opacity = "1";

  console.log("right");
  console.log(initial);
  if (initial === -880) {
    rightBtn.classList.add("disabled");
  }
}

leftBtn.addEventListener("click", clickLeft);
rightBtn.addEventListener("click", clickRight);
