window.onload = function() {
  document.getElementById("convert").onclick = convert;
}

function convert() {
  var first = document.getElementById("fI")
  var second = document.getElementById("sI")
  var firstDropdown = document.getElementById("fD")
  var secondDropdown = document.getElementById("sD")

  var numberFi = Number(fI.value)

  if (Number.isNaN(numberFi)) {
    alert("Please enter a NUMBER value into the first input box.")
    fI.value = null;
  } else {

    switch (Number(fD.value)) {
      case 1:
          switch (Number(sD.value)) {
            case 1:
               sI.value = fI.value

            break;
            case 2:
               sI.value = fI.value * 3.28084

            break;
            case 3:
               sI.value = fI.value * 1.09361

            break;
            case 4:
               sI.value = fI.value * 39.3701

            break;
            case 5:
               sI.value = fI.value * 100

            break;
            case 6:
               sI.value = fI.value * 0.000621371

            break;
            case 7:
               sI.value = fI.value * 0.00099999969062399994

            break;
          }

      break;
      case 2:
          switch (Number(sD.value)) {
            case 1:
              sI.value = fI.value * 0.3048

            break;
            case 2:
              sI.value = fI.value

            break;
            case 3:
              sI.value = fI.value * 0.333333

            break;
            case 4:
              sI.value = fI.value * 12

            break;
            case 5:
              sI.value = fI.value * 30.48

            break;
            case 6:
              sI.value = fI.value * 0.000189394

            break;
            case 7:
              sI.value = fI.value * 0.0003048

            break;
          }
      break;
      case 3:
          switch (Number(sD.value)) {
            case 1:
              sI.value = fI.value / 1.094

            break;
            case 2:
              sI.value = fI.value * 3

            break;
            case 3:
              sI.value = fI.value

            break;
            case 4:
              sI.value = fI.value * 36

            break;
            case 5:
              sI.value = fI.value * 91.44

            break;
            case 6:
              sI.value = fI.value / 1760

            break;
            case 7:
              sI.value = fI.value / 1094

            break;
          }
      break;
      case 4:
          switch (Number(sD.value)) {
            case 1:
              sI.value = fI.value / 39.37

            break;
            case 2:
              sI.value = fI.value / 12

            break;
            case 3:
              sI.value = fI.value / 36

            break;
            case 4:
              sI.value = fI.value

            break;
            case 5:
              sI.value = fI.value * 2.54

            break;
            case 6:
              sI.value = fI.value / 63360

            break;
            case 7:
              sI.value = fI.value / 39370

            break;
          }
      break;
      case 5:
          switch (Number(sD.value)) {
            case 1:
              sI.value = fI.value / 100

            break;
            case 2:
              sI.value = fI.value / 30.48

            break;
            case 3:
              sI.value = fI.value / 91.44

            break;
            case 4:
              sI.value = fI.value / 2.54

            break;
            case 5:
              sI.value = fI.value

            break;
            case 6:
              sI.value = fI.value / 160934

            break;
            case 7:
              sI.value = fI.value / 100000

            break;
          }
      break;
      case 6:
          switch (Number(sD.value)) {
            case 1:
              sI.value = fI.value * 1609

            break;
            case 2:
              sI.value = fI.value * 5280

            break;
            case 3:
              sI.value = fI.value * 1760

            break;
            case 4:
              sI.value = fI.value * 63360

            break;
            case 5:
              sI.value = fI.value * 160934

            break;
            case 6:
              sI.value = fI.value

            break;
            case 7:
              sI.value = fI.value * 1.609

            break;
          }
      break;
      case 7:
          switch (Number(sD.value)) {
            case 1:
              sI.value = fI.value * 1000

            break;
            case 2:
              sI.value = fI.value * 3281

            break;
            case 3:
              sI.value = fI.value * 1094

            break;
            case 4:
              sI.value = fI.value * 39370

            break;
            case 5:
              sI.value = fI.value * 100000

            break;
            case 6:
              sI.value = fI.value / 1.609

            break;
            case 7:
              sI.value = fI.value

            break;
          }
      break;
    }
  }
}
