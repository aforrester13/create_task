// Variables
let counter = 8;
let grades = [];
let hours = []
let newGrades = [];
let newHours = [];
let sum = 0;
let hourSum = 0;
let select;
let aPlus;
let a;
let aMinus;
let bPlus;
let b;
let bMinus;
let cPlus;
let c;
let cMinus;
let dPlus;
let d;
let f;
let input;
let hiddenInput;
let secondCounter;
let selectIndex;
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
  document.getElementById("calculate").onclick = gpa;
  document.getElementById("add").onclick = add;
}

function add() {
  gradeAnswer = prompt("What grade did you have for Class " + String(counter) + "?")
  opt = 0;
  if (gradeAnswer == null) {
    return;
  }

  counter++
  Number(counter)

  hiddenInput = document.getElementById("hidden");
  hiddenInput.value = counter;


  table = document.getElementById("table");
  tr = table.insertRow(counter)

  td1 = tr.insertCell(0);
  td1.id = "td1"
  td1.innerHTML = "Class " + String(counter);
  Number(counter);

  td2 = tr.insertCell(1);
  td2.id = "td2";
  select = document.createElement("SELECT");
  select.id = "nextGrade";

    aPlus = document.createElement("OPTION")
    aPlus.text = "A+";
    select.add(aPlus);

    a = document.createElement("OPTION");
    a.text = "A";
    select.add(a);

    aMinus = document.createElement("OPTION");
    aMinus.text = "A-";
    select.add(aMinus);

    bPlus = document.createElement("OPTION");
    bPlus.text = "B+";
    select.add(bPlus);

    b = document.createElement("OPTION");
    b.text = "B";
    select.add(b);

    bMinus = document.createElement("OPTION");
    bMinus.text = "B-";
    select.add(bMinus);

    cPlus = document.createElement("OPTION");
    cPlus.text = "C+";
    select.add(cPlus);

    c = document.createElement("OPTION");
    c.text = "C";
    select.add(c);

    cMinus = document.createElement("OPTION");
    cMinus.text = "C-";
    select.add(cMinus);

    dPlus = document.createElement("OPTION");
    dPlus.text = "D+";
    select.add(dPlus);

    d = document.createElement("OPTION");
    d.text = "D";
    select.add(d);

    f = document.createElement("OPTION");
    f.text = "F";
    select.add(f);
  td2.append(select)

  td3 = tr.insertCell(2);
  td3.id = "td3";
  input = document.createElement("INPUT")
  input.type = "text";
  input.id = "nextHour";
  td3.append(input);

  if (gradeAnswer == "A+" || gradeAnswer == "a+") {
    select.selectedIndex = "0"
    opt = 4.3;
  } else if (gradeAnswer == "A" || gradeAnswer == "a") {
    select.selectedIndex = "1";
    opt = 4.0;
  } else if (gradeAnswer == "A-" || gradeAnswer == "a-") {
    select.selectedIndex = "2";
    opt = 3.7;
  } else if (gradeAnswer == "B+" || gradeAnswer == "b+") {
    select.selectedIndex = "3";
    opt = 3.3;
  } else if (gradeAnswer == "B" || gradeAnswer == "b") {
    select.selectedIndex = "4";
    opt = 3.0;
  } else if (gradeAnswer == "B-" || gradeAnswer == "b-") {
    select.selectedIndex = "5";
    opt = 2.7;
  } else if (gradeAnswer == "C+" || gradeAnswer == "c+") {
    select.selectedIndex = "6";
    opt = 2.3;
  } else if (gradeAnswer == "C" || gradeAnswer == "c") {
    select.selectedIndex = "7";
    opt = 2.0;
  } else if (gradeAnswer == "C-" || gradeAnswer == "c-") {
    select.selectedIndex = "8";
    opt = 1.7
  } else if (gradeAnswer == "D+" || gradeAnswer == "d+") {
    select.selectedIndex = "9";
    opt = 1.3;
  } else if (gradeAnswer == "D" || gradeAnswer == "d") {
    select.selectedIndex = "10";
    opt = 1.0;
  } else if (gradeAnswer == "F" || gradeAnswer == "f") {
    select.selectedIndex = "11";
    opt = 0.0;
  } else if (gradeAnswer != "A+" || gradeAnswer != "a+" ||
    gradeAnswer != "A"  || gradeAnswer != "a"   ||
    gradeAnswer != "A-" || gradeAnswer != "a-"  ||
    gradeAnswer != "B+" || gradeAnswer != "b+"  ||
    gradeAnswer != "B"  || gradeAnswer != "b"   ||
    gradeAnswer != "B-" || gradeAnswer != "b-"  ||
    gradeAnswer != "C+" || gradeAnswer != "c+"  ||
    gradeAnswer != "C"  || gradeAnswer != "c"   ||
    gradeAnswer != "C-" || gradeAnswer != "c-"  ||
    gradeAnswer != "D+" || gradeAnswer != "d+"  ||
    gradeAnswer != "D"  || gradeAnswer != "d"   ||
    gradeAnswer != "F"  || gradeAnswer != "f") {
      alert("Enter letter grades only");
      prompt("What grade did you have for Class " + String(counter) + "?")
  } else {
    alert("Enter letter grades only");
    prompt("What grade did you have for Class " + String(counter) + "?")
  }

  hourAnswer = prompt("How many credit hours do you have in Class " + String(counter) + "?")
  input.value = hourAnswer;

  grades.push(String(opt))
  hours.push(String(input.value))

  opt = Number(opt)
  input.value = Number(input.value)

  opt = 0;
}


function gpa() {
  let grade1 = document.getElementById("grade1")
  let hour1 = document.getElementById("hour1")
  let grade2 = document.getElementById("grade2")
  let hour2 = document.getElementById("hour2")
  let grade3 = document.getElementById("grade3")
  let hour3 = document.getElementById("hour3")
  let grade4 = document.getElementById("grade4")
  let hour4 = document.getElementById("hour4")
  let grade5 = document.getElementById("grade5")
  let hour5 = document.getElementById("hour5")
  let grade6 = document.getElementById("grade6")
  let hour6 = document.getElementById("hour6")
  let grade7 = document.getElementById("grade7")
  let hour7 = document.getElementById("hour7")
  let grade8 = document.getElementById("grade8")
  let hour8 = document.getElementById("hour8")
  let calculate = document.getElementById("calculate");
  let addBtn = document.getElementById("add");
  hiddenInput = document.getElementById("hidden")

  grades.unshift(grade1.value, grade2.value, grade3.value, grade4.value, grade5.value, grade6.value, grade7.value, grade8.value)
  hours.unshift(hour1.value, hour2.value, hour3.value, hour4.value, hour5.value, hour6.value, hour7.value, hour8.value)

  if (hiddenInput.value > 8) {
    for (let i = 0; i < hiddenInput.value; i++) {
      sum = sum + (grades[i] * hours[i])
    }

    for (let j = 0; j < hiddenInput.value; j++) {
      hourSum = hourSum + Number(hours[j])
    }
  } else {
    for (let i = 0; i < 8; i++) {
      sum = sum + (grades[i] * hours[i])
    }

    for (let j = 0; j < 8; j++) {
      hourSum = hourSum + Number(hours[j])
    }
  }
console.log(sum)
console.log(hourSum)

  final = Number((Math.ceil(sum * 10) / 10)/hourSum)
  final = (Math.floor(final * 100) / 100)

  lastInput = document.getElementById("final");

  grades = [];
  hours = [];
  sum = 0;
  hourSum = 0;

  if (Number.isNaN(final)) {
    lastInput.value = "";
  } else {
    lastInput.value = String(final);
    Number(final)
    if (lastInput.value >= 3.7) {
      lastInput.style.backgroundColor = "#00FF00"
    } else if (lastInput.value >= 3.3 && lastInput.value < 3.7) {
      lastInput.style.backgroundColor = "#CCFF66"
    } else if (lastInput.value >= 2.7 && lastInput.value < 3.3) {
      lastInput.style.backgroundColor = "#E69900"
    } else if (lastInput.value >= 2.0 && lastInput.value < 2.7) {
      lastInput.style.backgroundColor = "FF8566"
    } else if (lastInput.value >= 0 && lastInput.value < 2.0) {
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
