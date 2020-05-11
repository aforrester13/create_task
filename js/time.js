// All code in this section was done by Aidan Forrester

window.onload = function() {
  document.getElementById("convert").onclick = convert;
}

function convert() {
  var first = document.getElementById("firstInput")
  var second = document.getElementById("secondInput")
  var firstDropdownValue = document.getElementById("firstDropdown").value
  var secondDropdownValue = document.getElementById("secondDropdown").value

  firstDropdownValue = Number(firstDropdownValue)
  secondDropdownValue = Number(secondDropdownValue)

  if (first.value === null) {
    alert("Please enter a value in the first input box.")
  } else {

    switch (firstDropdownValue) {
      case 1:
          switch (secondDropdownValue) {
            case 1:
               second.value = first.value

            break;
            case 2:
               second.value = first.value * 12

            break;
            case 3:
               second.value = first.value * 52

            break;
            case 4:
               second.value = first.value * 365

            break;
            case 5:
               second.value = first.value * 8760

            break;
            case 6:
               second.value = first.value * 525600

            break;
            case 7:
               second.value = first.value * 31540000

            break;
          }

      break;
      case 2:
          switch (secondDropdownValue) {
            case 1:
              second.value = first.value / 12

            break;
            case 2:
              second.value = first.value

            break;
            case 3:
              second.value = first.value * 4

            break;
            case 4:
              second.value = first.value * 30

            break;
            case 5:
              second.value = first.value * 730

            break;
            case 6:
              second.value = first.value * 43800

            break;
            case 7:
              second.value = first.value * 2628000

            break;
          }
      break;
      case 3:
          switch (secondDropdownValue) {
            case 1:
              second.value = first.value / 52

            break;
            case 2:
              second.value = first.value / 4

            break;
            case 3:
              second.value = first.value

            break;
            case 4:
              second.value = first.value * 7

            break;
            case 5:
              second.value = first.value * 168

            break;
            case 6:
              second.value = first.value * 10080

            break;
            case 7:
              second.value = first.value * 604800

            break;
          }
      break;
      case 4:
          switch (secondDropdownValue) {
            case 1:
              second.value = first.value / 365

            break;
            case 2:
              second.value = first.value / 30

            break;
            case 3:
              second.value = first.value / 7

            break;
            case 4:
              second.value = first.value

            break;
            case 5:
              second.value = first.value * 24

            break;
            case 6:
              second.value = first.value * 1440

            break;
            case 7:
              second.value = first.value * 86400

            break;
          }
      break;
      case 5:
          switch (secondDropdownValue) {
            case 1:
              second.value = first.value / 8760

            break;
            case 2:
              second.value = first.value / 730

            break;
            case 3:
              second.value = first.value / 168

            break;
            case 4:
              second.value = first.value / 24

            break;
            case 5:
              second.value = first.value

            break;
            case 6:
              second.value = first.value * 60

            break;
            case 7:
              second.value = first.value * 3600

            break;
          }
      break;
      case 6:
          switch (secondDropdownValue) {
            case 1:
              second.value = first.value / 525600

            break;
            case 2:
              second.value = first.value / 43800

            break;
            case 3:
              second.value = first.value / 10080

            break;
            case 4:
              second.value = first.value / 1440

            break;
            case 5:
              second.value = first.value / 60

            break;
            case 6:
              second.value = first.value

            break;
            case 7:
              second.value = first.value * 60

            break;
          }
      break;
      case 7:
          switch (secondDropdownValue) {
            case 1:
              second.value = first.value / 31540000

            break;
            case 2:
              second.value = first.value / 2628000

            break;
            case 3:
              second.value = first.value / 604800

            break;
            case 4:
              second.value = first.value / 86400

            break;
            case 5:
              second.value = first.value / 3600

            break;
            case 6:
              second.value = first.value / 60

            break;
            case 7:
              second.value = first.value

            break;
          }
      break;
    }
  }
}
