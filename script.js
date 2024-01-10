const screenInput = document.getElementsByClassName("screen-display")[0];

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
    screenDisplay.innerHTML = "";
    // document.getElementsByClassName("screen-input")[0].disabled = true;
  } else {
    // document.getElementsByClassName("screen-input")[0].disabled = false;
    // document.getElementsByClassName("screen-input")[0].focus();
    return;
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

class Calculator {
  constructor() {
    this.number = [];
    this.equation = [];
  }
  createEquation(val) {
    this.number.push(val);

    // document.getElementById("display-number").innerHTML = this.number.join("");
    document.getElementsByClassName("equation-para")[0].innerHTML =
      this.equation.join("") + this.number.join("");
  }
  addOperator(op) {
    this.equation.push(parseInt(this.number.join("")));
    this.equation.push(op);
    this.number = [];

    // document.getElementById("display-equation").innerHTML =
    //   this.equation.join("");
    // document.getElementById("display-number").innerHTML = "";
    document.getElementsByClassName("equation-para")[0].innerHTML =
      this.equation.join("");
  }
  clear() {
    this.number = [];
    this.equation = [];
    document.getElementsByClassName("equation-para")[0].innerHTML = "";
    document.getElementsByClassName("answer-para")[0].innerHTML = "";
  }
  getTotal() {
    this.equation.push(parseInt(this.number.join("")));

    while (this.equation.some((e) => e === "*" || e === "/")) {
      for (let i = 0; i < this.equation.length; i++) {
        if (this.equation[i] === "*") {
          let multiplied = this.equation[i - 1] * this.equation[i + 1];
          this.equation.splice(i - 1, 3, multiplied);
        } else if (this.equation[i] === "/") {
          let divided = this.equation[i - 1] / this.equation[i + 1];
          this.equation.splice(i - 1, 3, divided);
        }
      }
    }

    while (this.equation.some((e) => e === "+" || e === "-")) {
      for (let i = 0; i < this.equation.length; i++) {
        if (this.equation[i] === "+") {
          let added = this.equation[i - 1] + this.equation[i + 1];
          this.equation.splice(i - 1, 3, added);
        } else if (this.equation[i] === "-") {
          let subtracted = this.equation[i - 1] - this.equation[i + 1];
          this.equation.splice(i - 1, 3, subtracted);
        }
      }
    }

    console.log(this.equation);
    document.getElementsByClassName("answer-para")[0].innerHTML =
      "= " + this.equation;
  }
}
const calc = new Calculator();
