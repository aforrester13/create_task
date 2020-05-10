// Variables
let counter = 8;
let grades = [];
let hours = []
let newGrades = [];
let newHours = [];
let sum = 0;
let hourSum = 0;
let input1;
let input2;
let hiddenInput;
let secondCounter;
let td1;
let td2;
let td3;
let tr;
let table;
let gradeAnswer;
let hourAnswer;
let opt;
let secondHiddenInput;
let thirdHiddenInput;
let lastInput;
// Functions

window.onload = function() {
  document.getElementById("calculate").onclick = qpa;
  document.getElementById("add").onclick = add;
}

function add() {
  counter++
  Number(counter)

  hiddenInput = document.getElementById("hidden");
  hiddenInput.value = counter;

  table = document.getElementById("table");
  tr = table.insertRow(counter)

  td1 = tr.insertCell(0);
  td1.id = "td1";
  td1.innerHTML = "Class " + String(counter);
  Number(counter);

  td2 = tr.insertCell(1);
  td2.id = "td2";
  input1 = document.createElement("INPUT");
  input1.type = "text";
  input1.id = "nextGrade";
  td2.append(input1)

  td3 = tr.insertCell(2);
  td3.id = "td3";
  input2 = document.createElement("INPUT")
  input2.type = "text";
  input2.id = "nextHour";
  td3.append(input2);

  gradeAnswer = prompt("What grade did you have for Class " + String(counter) + "?")
  if (gradeAnswer == null) {
    return;
  } else if (Number.isNaN(gradeAnswer) || Number(gradeAnswer) < 0 || Number(gradeAnswer) > 100) {
    alert("Please enter a NUMBER between 0 and 100.")
    prompt("What grade did you have for Class " + String(counter) + "?")
  }
  input1.value = gradeAnswer;


  hourAnswer = prompt("How many credit hours do you have in Class " + String(counter) + "?")
  if (hourAnswer == null) {
    return;
  } else if (Number.isNaN(hourAnswer)) {
    alert("Please enter a NUMBER")
    prompt("How many credit hours do you have in Class " + String(counter) + "?")
  }
  input2.value = hourAnswer;

  grades.push(String(input1.value))
  hours.push(String(input2.value))

  input1.value = Number(input1.value)
  input2.value = Number(input2.value)
}

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
  hiddenInput = document.getElementById("hidden")

  grades.unshift(g1.value, g2.value, g3.value, g4.value, g5.value, g6.value, g7.value, g8.value)
  hours.unshift(h1.value, h2.value, h3.value, h4.value, h5.value, h6.value, h7.value, h8.value)

  console.log(grades)
  console.log(hours)
  console.log(hiddenInput.value)
  if (hiddenInput.value > 8) {
    for (var i = 0; i < hiddenInput.value; i++) {
      sum = sum + (grades[i] * hours[i])
    }
    for (var j = 0; j < hiddenInput.value; j++) {
      hourSum= hourSum + Number(hours[j])
    }
  } else {
    for (var i = 0; i < 8; i++) {
      sum = sum + (grades[i] * hours[i])
    }
    for (var j = 0; j < 8; j++) {
      hourSum= hourSum + Number(hours[j])
    }
  }

console.log(sum)
console.log(hourSum)

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
      lastInput.style.backgroundColor = "#FF8566"
    } else if (lastInput.value >= 0 && lastInput.value < 73) {
      lastInput.style.backgroundColor = "#FF0000"
    } else {
      lastInput.style.backgroundColor = "#FFFFFF"
    }

  }

}
