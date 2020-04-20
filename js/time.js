function convert() {
  var first = document.getElementById("firstInput")
  var second = document.getElementById("secondInput")
  var firstDropdown = document.getElementById("firstDropdown")
  var secondDropdown = document.getElementById("secondDropdown")

  if (first.value === null) {
    alert("Please enter a value in the first input box.")
  } else {

    switch (Number(firstDropdown.value)) {
      case 1:
          switch (Number(secondDropdown.value)) {
            case 1:
               second.value = first.value
               second.toLocaleString('en')
            break;
            case 2:
               second.value = first.value * 12
               second.toLocaleString('en')
            break;
            case 3:
               second.value = first.value * 52
               second.toLocaleString('en')
            break;
            case 4:
               second.value = first.value * 365
               second.toLocaleString('en')
            break;
            case 5:
               second.value = first.value * 8760
               second.toLocaleString('en')
            break;
            case 6:
               second.value = first.value * 525600
               second.toLocaleString('en')
            break;
            case 7:
               second.value = first.value * 31540000
               second.toLocaleString('en')
            break;
          }

      break;
      case 2:
          switch (Number(secondDropdown.value)) {
            case 1:
              second.value = first.value / 12
              second.toLocaleString('en')
            break;
            case 2:
              second.value = first
              second.toLocaleString('en')
            break;
            case 3:
              second.value = first.value * 4
              second.toLocaleString('en')
            break;
            case 4:
              second.value = first.value * 30
              second.toLocaleString('en')
            break;
            case 5:
              second.value = first.value * 730
              second.toLocaleString('en')
            break;
            case 6:
              second.value = first.value * 43800
              second.toLocaleString('en')
            break;
            case 7:
              second.value = first.value * 2628000
              second.toLocaleString('en')
            break;
          }
      break;
      case 3:
          switch (Number(secondDropdown.value)) {
            case 1:
              second.value = first.value / 52
              second.toLocaleString('en')
            break;
            case 2:
              second.value = first.value / 4
              second.toLocaleString('en')
            break;
            case 3:
              second.value = first
              second.toLocaleString('en')
            break;
            case 4:
              second.value = first.value * 7
              second.toLocaleString('en')
            break;
            case 5:
              second.value = first.value * 168
              second.toLocaleString('en')
            break;
            case 6:
              second.value = first.value * 10080
              second.toLocaleString('en')
            break;
            case 7:
              second.value = first.value * 604800
              second.toLocaleString('en')
            break;
          }
      break;
      case 4:
          switch (Number(secondDropdown.value)) {
            case 1:
              second.value = first.value / 365
              second.toLocaleString('en')
            break;
            case 2:
              second.value = first.value / 30
              second.toLocaleString('en')
            break;
            case 3:
              second.value = first.value / 7
              second.toLocaleString('en')
            break;
            case 4:
              second.value = first
              second.toLocaleString('en')
            break;
            case 5:
              second.value = first.value * 24
              second.toLocaleString('en')
            break;
            case 6:
              second.value = first.value * 1440
              second.toLocaleString('en')
            break;
            case 7:
              second.value = first.value * 86400
              second.toLocaleString('en')
            break;
          }
      break;
      case 5:
          switch (Number(secondDropdown.value)) {
            case 1:
              second.value = first.value / 8760
              second.toLocaleString('en')
            break;
            case 2:
              second.value = first.value / 730
              second.toLocaleString('en')
            break;
            case 3:
              second.value = first.value / 168
              second.toLocaleString('en')
            break;
            case 4:
              second.value = first.value / 24
              second.toLocaleString('en')
            break;
            case 5:
              second.value = first
              second.toLocaleString('en')
            break;
            case 6:
              second.value = first.value * 60
              second.toLocaleString('en')
            break;
            case 7:
              second.value = first.value * 3600
              second.toLocaleString('en')
            break;
          }
      break;
      case 6:
          switch (Number(secondDropdown.value)) {
            case 1:
              second.value = first.value / 525600
              second.toLocaleString('en')
            break;
            case 2:
              second.value = first.value / 43800
              second.toLocaleString('en')
            break;
            case 3:
              second.value = first.value / 10080
              second.toLocaleString('en')
            break;
            case 4:
              second.value = first.value / 1440
              second.toLocaleString('en')
            break;
            case 5:
              second.value = first.value / 60
              second.toLocaleString('en')
            break;
            case 6:
              second.value = first
              second.toLocaleString('en')
            break;
            case 7:
              second.value = first.value * 60
              second.toLocaleString('en')
            break;
          }
      break;
      case 7:
          switch (Number(secondDropdown.value)) {
            case 1:
              second.value = first.value / 31540000
              second.toLocaleString('en')
            break;
            case 2:
              second.value = first.value / 2628000
              second.toLocaleString('en')
            break;
            case 3:
              second.value = first.value / 604800
              second.toLocaleString('en')
            break;
            case 4:
              second.value = first.value / 86400
              second.toLocaleString('en')
            break;
            case 5:
              second.value = first.value / 3600
              second.toLocaleString('en')
            break;
            case 6:
              second.value = first.value / 60
              second.toLocaleString('en')
            break;
            case 7:
              second.value = first
              second.toLocaleString('en')
            break;
          }
      break;
    }
  }
}
