// Variables
let counter = 8;
let grades = [];
let hours = []
let newGrades = [];
let newHours = [];
let sum = 0;
let hourSum = 0;
// Functions

window.onload = function() {
  document.getElementById("calculate").onclick = qpa;

function qpa() {
  let g1 = document.getElementById("g1")
  let h1 = document.getElementById("h1")
  let g2 = document.getElementById("g2")
  let h2 = document.getElementById("h2")
  let g3 = document.getElementById("g3")
  let h3 = document.getElementById("h3")
  let g4 = document.getElementById("g4")
  let h4 = document.getElementById("h4")
  let g5 = document.getElementById("g5")
  let h5 = document.getElementById("h5")
  let g6 = document.getElementById("g6")
  let h6 = document.getElementById("h6")
  let g7 = document.getElementById("g7")
  let h7 = document.getElementById("h7")
  let g8 = document.getElementById("g8")
  let h8 = document.getElementById("h8")
  let calculate = document.getElementById("calculate");

  grades.push(g1.value, g2.value, g3.value, g4.value, g5.value, g6.value, g7.value, g8.value)
  hours.push(h1.value, h2.value, h3.value, h4.value, h5.value, h6.value, h7.value, h8.value)

  for (var i = 0; i < 8; i++) {
    sum = sum + (grades[i] * hours[i])
  }
  for (var j = 0; j < 8; j++) {
    hourSum= hourSum + hours[j]
  }

  final= Number((Math.ceil(sum * 10) / 10) /hourSum);
  final = (Math.floor(final * 100) / 100);

  lastInput= document.getElementById("final");

  grades = [];
  hours = [];
  sum = 0;
  hourSum = 0;

  if (Number.isNaN(final)) {
    lastInput.value = "";
  } else {
    lastInput.value = String(final);
    Number(final)
    if (lastInput.value >= 93) {
      lastInput.style.backgroundColor = "#00FF00"
    } else if (lastInput.value >= 87 && lastInput.value < 93) {
      lastInput.style.backgroundColor = "#CCFF66"
    } else if (lastInput.value >= 80 && lastInput.value < 87) {
      lastInput.style.backgroundColor = "#E69900"
    } else if (lastInput.value >= 73 && lastInput.value < 80) {
      lastInput.style.backgroundColor = "FF8566"
    } else if (lastInput.value >= 0 && lastInput.value < 73) {
      lastInput.style.backgroundColor = "FF0000"
    } else {
      lastInput.style.backgroundColor
    }

  }


  reset(hours);
}

function reset(hours) {
  hours.forEach(function(hour) {
    hour.value = "";
  })
}
