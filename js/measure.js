window.onload = function() {
  document.getElementById("convert").onclick = convert;
}

function convert() {
  var first = document.getElementById("fI")
  var second = document.getElementById("sI")
  var firstDropdown = document.getElementById("fD")
  var secondDropdown = document.getElementById("sD")

  if (fI.value === null) {
    alert("Please enter a value in the first input box.")
  } else {

    switch (Number(fD.value)) {
      case 1:
          switch (Number(sD.value)) {
            case 1:
               sI.value = fI.value
               sI.toLocaleString('en')
            break;
            case 2:
               sI.value = fI.value * 3.28084
               sI.toLocaleString('en')
            break;
            case 3:
               sI.value = fI.value * 1.09361
               sI.toLocaleString('en')
            break;
            case 4:
               sI.value = fI.value * 39.3701
               sI.toLocaleString('en')
            break;
            case 5:
               sI.value = fI.value * 100
               sI.toLocaleString('en')
            break;
            case 6:
               sI.value = fI.value * 0.000621371
               sI.toLocaleString('en')
            break;
            case 7:
               sI.value = fI.value * 0.00099999969062399994
               sI.toLocaleString('en')
            break;
          }

      break;
      case 2:
          switch (Number(sD.value)) {
            case 1:
              sI.value = fI.value * 0.3048
              sI.toLocaleString('en')
            break;
            case 2:
              sI.value = fI.value
              sI.toLocaleString('en')
            break;
            case 3:
              sI.value = fI.value * 0.333333
              sI.toLocaleString('en')
            break;
            case 4:
              sI.value = fI.value * 12
              sI.toLocaleString('en')
            break;
            case 5:
              sI.value = fI.value * 30.48
              sI.toLocaleString('en')
            break;
            case 6:
              sI.value = fI.value * 0.000189394
              sI.toLocaleString('en')
            break;
            case 7:
              sI.value = fI.value * 0.0003048
              sI.toLocaleString('en')
            break;
          }
      break;
      case 3:
          switch (Number(sD.value)) {
            case 1:
              sI.value = fI.value / 1.094
              sI.toLocaleString('en')
            break;
            case 2:
              sI.value = fI.value * 3
              sI.toLocaleString('en')
            break;
            case 3:
              sI.value = fI.value
              sI.toLocaleString('en')
            break;
            case 4:
              sI.value = fI.value * 36
              sI.toLocaleString('en')
            break;
            case 5:
              sI.value = fI.value * 91.44
              sI.toLocaleString('en')
            break;
            case 6:
              sI.value = fI.value / 1760
              sI.toLocaleString('en')
            break;
            case 7:
              sI.value = fI.value / 1094
              sI.toLocaleString('en')
            break;
          }
      break;
      case 4:
          switch (Number(sD.value)) {
            case 1:
              sI.value = fI.value / 39.37
              sI.toLocaleString('en')
            break;
            case 2:
              sI.value = fI.value / 12
              sI.toLocaleString('en')
            break;
            case 3:
              sI.value = fI.value / 36
              sI.toLocaleString('en')
            break;
            case 4:
              sI.value = fI.value
              sI.toLocaleString('en')
            break;
            case 5:
              sI.value = fI.value * 2.54
              sI.toLocaleString('en')
            break;
            case 6:
              sI.value = fI.value / 63360
              sI.toLocaleString('en')
            break;
            case 7:
              sI.value = fI.value / 39370
              sI.toLocaleString('en')
            break;
          }
      break;
      case 5:
          switch (Number(sD.value)) {
            case 1:
              sI.value = fI.value / 100
              sI.toLocaleString('en')
            break;
            case 2:
              sI.value = fI.value / 30.48
              sI.toLocaleString('en')
            break;
            case 3:
              sI.value = fI.value / 91.44
              sI.toLocaleString('en')
            break;
            case 4:
              sI.value = fI.value / 2.54
              sI.toLocaleString('en')
            break;
            case 5:
              sI.value = fI.value
              sI.toLocaleString('en')
            break;
            case 6:
              sI.value = fI.value / 160934
              sI.toLocaleString('en')
            break;
            case 7:
              sI.value = fI.value / 100000
              sI.toLocaleString('en')
            break;
          }
      break;
      case 6:
          switch (Number(sD.value)) {
            case 1:
              sI.value = fI.value * 1609
              sI.toLocaleString('en')
            break;
            case 2:
              sI.value = fI.value * 5280
              sI.toLocaleString('en')
            break;
            case 3:
              sI.value = fI.value * 1760
              sI.toLocaleString('en')
            break;
            case 4:
              sI.value = fI.value * 63360
              sI.toLocaleString('en')
            break;
            case 5:
              sI.value = fI.value * 160934
              sI.toLocaleString('en')
            break;
            case 6:
              sI.value = fI.value
              sI.toLocaleString('en')
            break;
            case 7:
              sI.value = fI.value * 1.609
              sI.toLocaleString('en')
            break;
          }
      break;
      case 7:
          switch (Number(sD.value)) {
            case 1:
              sI.value = fI.value * 1000
              sI.toLocaleString('en')
            break;
            case 2:
              sI.value = fI.value * 3281
              sI.toLocaleString('en')
            break;
            case 3:
              sI.value = fI.value * 1094
              sI.toLocaleString('en')
            break;
            case 4:
              sI.value = fI.value * 39370
              sI.toLocaleString('en')
            break;
            case 5:
              sI.value = fI.value * 100000
              sI.toLocaleString('en')
            break;
            case 6:
              sI.value = fI.value / 1.609
              sI.toLocaleString('en')
            break;
            case 7:
              sI.value = fI.value
              sI.toLocaleString('en')
            break;
          }
      break;
    }
  }
}
