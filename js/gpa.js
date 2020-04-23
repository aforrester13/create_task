// Variables
var counter = 8;
var grades = [];
var hours = []
var sum = 0;
var hourSum = 0;
var select;
// Functions
function add() {
  counter++

  let hiddenInput = document.getElementById("hidden");
  hiddenInput.value = counter

  var table = document.getElementById("table");
  var tr = table.insertRow(counter)

  var td1 = tr.insertCell(0);
  td1.id = "td1"
  td1.innerHTML = "Class " + String(counter);
  Number(counter);

  var td2 = tr.insertCell(1);
  td2.id = "td2";
  select = document.createElement("SELECT");
  select.id = "nextGrade";

    var a = document.createElement("OPTION");
    a.value = 4.0;
    a.text = "A";
    select.add(a);

    var aMinus = document.createElement("OPTION");
    aMinus.value = 3.7;
    aMinus.text = "A-";
    select.add(aMinus);

    var bPlus = document.createElement("OPTION");
    bPlus.value = 3.3;
    bPlus.text = "B+";
    select.add(bPlus);

    var b = document.createElement("OPTION");
    b.value = 3.0;
    b.text = "B";
    select.add(b);

    var bMinus = document.createElement("OPTION");
    bMinus.value = 2.7;
    bMinus.text = "B-";
    select.add(bMinus);

    var cPlus = document.createElement("OPTION");
    cPlus.value = 2.3;
    cPlus.text = "C+";
    select.add(cPlus);

    var c = document.createElement("OPTION");
    c.value = 2.0;
    c.text = "C";
    select.add(c);

    var cMinus = document.createElement("OPTION");
    cMinus.value = 1.7;
    cMinus.text = "C-";
    select.add(cMinus);

    var dPlus = document.createElement("OPTION");
    dPlus.value = 1.3;
    dPlus.text = "D+";
    select.add(dPlus);

    var d = document.createElement("OPTION");
    d.value = 1.0;
    d.text = "D";
    select.add(d);

    var f = document.createElement("OPTION");
    f.value = 0.0;
    f.text = "F";
    select.add(f);
  td2.append(select)

  var selectText = select.textContent


  var td3 = tr.insertCell(2);
  td3.id = "td3";
  var input = document.createElement("INPUT")
  input.type = "text";
  input.id = "nextHour";
  td3.append(input);

 grades.push(select.value)

   /* switch (String(selectText)) {
    case "A":
    grades.push(a.value)
    break;

    case "A-":
    grades.push(aMinus.value)
    break;

    case "B+":
    grades.push(bPlus.value)
    break;

    case "B":
    grades.push(b.value)
    break;

    case "B-":
    grades.push(bMinus.value)
    break;

    case "C+":
    grades.push(cPlus.value)
    break;

    case "C":
    grades.push(c.value)
    break;

    case "C-":
    grades.push(cMinus.value)
    break;

    case "D+":
    grades.push(dPlus.value)
    break;

    case "D":
    grades.push(d.value)
    break;

    case "F":
    grades.push(f.value)
    break;
  }

  hours.push(input.value)
*/



}



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

  let secondCounter = document.getElementById("hidden").value;



  grades.unshift(grade1, grade2, grade3, grade4, grade5, grade6, grade7, grade8)
  hours.unshift(hour1, hour2, hour3, hour4, hour5, hour6, hour7, hour8)

  console.log(grades)

  for (let i = 0; i < secondCounter; i++) {
    sum = sum + (grades[i] * hours[i])
  }

  // console.log(sum)

  for (let j = 0; j < secondCounter; j++) {
    hourSum = hourSum + Number(hours[j])
  }

  var final = Number(sum/hourSum)
  final = (Math.floor(final * 100) / 100)

  var lastInput = document.getElementById("final")

  lastInput.value = final;
}
