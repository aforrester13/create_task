// Variables
let counter = 8;
let grades = [];
let hours = []
let sum = 0;
let hourSum = 0;
let lastInput;
let final;


function gpa() {
  let grade1 = document.getElementById("grade1").value
  let hour1 = document.getElementById("hour1").value
  let grade2 = document.getElementById("grade2").value
  let hour2 = document.getElementById("hour2").value
  let grade3 = document.getElementById("grade3").value
  let hour3 = document.getElementById("hour3").value
  let grade4 = document.getElementById("grade4").value
  let hour4 = document.getElementById("hour4").value
  let grade5 = document.getElementById("grade5").value
  let hour5 = document.getElementById("hour5").value
  let grade6 = document.getElementById("grade6").value
  let hour6 = document.getElementById("hour6").value
  let grade7 = document.getElementById("grade7").value
  let hour7 = document.getElementById("hour7").value
  let grade8 = document.getElementById("grade8").value
  let hour8 = document.getElementById("hour8").value
  let calculate = document.getElementById("calculate");
  let addBtn = document.getElementById("addClass");

  grades.push(grade1, grade2, grade3, grade4, grade5, grade6, grade7, grade8)
  hours.push(hour1, hour2, hour3, hour4, hour5, hour6, hour7, hour8)

  for (let i = 0; i < 8; i++) {
    sum = sum + (grades[i] * hours[i])
  }

  for (let j = 0; j < 8; j++) {
    hourSum = hourSum + Number(hours[j])
  }

  final = Number(sum/hourSum)
  final = (Math.floor(final * 100) / 100)

  lastInput = document.getElementById("final")

  if (Number.isNaN(final)) {
    lastInput.value = "";
  } else {
    lastInput.value = "Your GPA is: " + String(final);
  }

  for (let y = 0; y < 8; y++) {
    grades.pop(grades[y]);
  }


  for (let z = 0; z < 8; z++) {
    hours.pop(hours[z]);
  }
}
