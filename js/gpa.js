// Functions

function gpa() {
  let grades = []
  let hours = []
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
  let calculate = document.getElementById("calculate")


  var inputs = document.getElementsByClassName("input");
  var sum = 0;
  var hourSum = 0;

  grades.push(grade1, grade2, grade3, grade4, grade5, grade6, grade7, grade8)
  hours.push(hour1, hour2, hour3, hour4, hour5, hour6, hour7, hour8)

  

  for (let x = 0; x < 16; x++) {
    if (inputs[x].value == null) {
      break;
    } else {
      continue;
    }
  }

  for (let i = 0; i < 8; i++) {
    sum = sum + (grades[i] * hours[i])
  }

  for (let j = 0; j < 8; j++) {
    hourSum = hourSum + Number(hours[j])
  }

  var final = Number(sum/hourSum)
  final = (Math.floor(final * 100) / 100)

  var lastInput = document.getElementById("final")

  lastInput.value = final;
}
