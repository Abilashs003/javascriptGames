const red = document.querySelector(".red");
console.log(red);
const yellow = document.querySelector(".yellow");
console.log(yellow);
const green = document.querySelector(".green");
console.log(green);

scenarios = [
  ["green", "off", "off"],
  ["off", "off", "red"],
  ["off,yellow,off"],
];

roads = ["a", "b", "c", "d"];

roads.forEach((element) => {
  let remaining = roads.except(element);
  console.log(remaining);
});

// red.classList.add("mole");
// yellow.classList.add("mole");
// green.classList.add("mole");
function greenLight() {
  yellow.classList.remove("mole");
  console.log("grren Light");
  green.classList.add("mole");
}

function yellowLight() {
  red.classList.remove("mole");
  console.log("yellow Light");
  yellow.classList.add("mole");
}

function redLight() {
  console.log("red light");
  green.classList.remove("mole");
  red.classList.add("mole");
  setTimeout(yellowLight, 2500);
}

function loop() {
  greenLight();
  setTimeout(redLight, 6000);
}

loop();
setInterval(loop, 10000);

var red1 = new Promise();
red1.then();
