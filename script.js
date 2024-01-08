let toggled = false;

function playAudio(effect) {
  const slide = new Audio("./assets/slide.mp3");
  const click = new Audio("./assets/click.mp3");
  switch (effect) {
    case "slide":
      slide.play();
      break;
    case "click":
      click.play();
      break;
  }
}

function disableInput(condition) {
  if (condition == true) {
    document.getElementsByClassName("screen-input")[0].value = "";
    document.getElementsByClassName("screen-input")[0].disabled = true;
  } else {
    document.getElementsByClassName("screen-input")[0].disabled = false;
    document.getElementsByClassName("screen-input")[0].focus();
  }
}

function buttonClick() {
  playAudio("click");
}

function toggleSlider() {
  playAudio("slide");
  if (toggled === false) {
    toggled = true;
    document
      .getElementsByClassName("slider-round")[0]
      .classList.add("toggled-on");
    disableInput(false);
  } else {
    toggled = false;
    document
      .getElementsByClassName("slider-round")[0]
      .classList.remove("toggled-on");
    disableInput(true);
  }
}

const buttons = document.querySelectorAll(".btn");
buttons.forEach((button) => {
  button.addEventListener("click", () => playAudio("click"));
});
