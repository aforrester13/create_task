function convert() {
  var first = document.getElementById("firstInput").value
  var second = document.getElementById("secondInput").value
  var firstDropdown = document.getElementById("firstDropdown").value
  var secondDropdown = document.getElementById("secondDropdown").value

  if (first === null) {
    break;
  } else {

    switch (firstDropdown) {
      case 1:
          switch (secondDropdown) {
            case 1:
               second = first
               second.toLocaleString('en')
            break;
            case 2:
               second = first * 12
               second.toLocaleString('en')
            break;
            case 3:
               second = first * 52
               second.toLocaleString('en')
            break;
            case 4:
               second = first * 365
               second.toLocaleString('en')
            break;
            case 5:
               second = first * 8760
               second.toLocaleString('en')
            break;
            case 6:
               second = first * 525600
               second.toLocaleString('en')
            break;
            case 7:
               second = first * 31540000
               second.toLocaleString('en')
            break;
          }

      break;
      case 2:
          switch (secondDropdown) {
            case 1:
              second = first / 12
              second.toLocaleString('en')
            break;
            case 2:
              second = first
              second.toLocaleString('en')
            break;
            case 3:
              second = first * 4
              second.toLocaleString('en')
            break;
            case 4:
              second = first * 30
              second.toLocaleString('en')
            break;
            case 5:
              second = first * 730
              second.toLocaleString('en')
            break;
            case 6:
              second = first * 43800
              second.toLocaleString('en')
            break;
            case 7:
              second = first * 2628000
              second.toLocaleString('en')
            break;
          }
      break;
      case 3:
          switch (secondDropdown) {
            case 1:
              second = first / 52
              second.toLocaleString('en')
            break;
            case 2:
              second = first / 4
              second.toLocaleString('en')
            break;
            case 3:
              second = first
              second.toLocaleString('en')
            break;
            case 4:
              second = first * 7
              second.toLocaleString('en')
            break;
            case 5:
              second = first * 168
              second.toLocaleString('en')
            break;
            case 6:
              second = first * 10080
              second.toLocaleString('en')
            break;
            case 7:
              second = first * 604800
              second.toLocaleString('en')
            break;
          }
      break;
      case 4:
          switch (secondDropdown) {
            case 1:
              second = first / 365
              second.toLocaleString('en')
            break;
            case 2:
              second = first / 30
              second.toLocaleString('en')
            break;
            case 3:
              second = first / 7
              second.toLocaleString('en')
            break;
            case 4:
              second = first
              second.toLocaleString('en')
            break;
            case 5:
              second = first * 24
              second.toLocaleString('en')
            break;
            case 6:
              second = first * 1440
              second.toLocaleString('en')
            break;
            case 7:
              second = first * 86400
              second.toLocaleString('en')
            break;
          }
      break;
      case 5:
          switch (secondDropdown) {
            case 1:
              second = first / 8760
              second.toLocaleString('en')
            break;
            case 2:
              second = first / 730
              second.toLocaleString('en')
            break;
            case 3:
              second = first / 168
              second.toLocaleString('en')
            break;
            case 4:
              second = first / 24
              second.toLocaleString('en')
            break;
            case 5:

            case 6:

            case 7:
          }
      break;
      case 6:
          switch (secondDropdown) {
            case 1:

            case 2:

            case 3:

            case 4:

            case 5:

            case 6:

            case 7:
          }
      break;
      case 7:
          switch (secondDropdown) {
            case 1:

            case 2:

            case 3:

            case 4:

            case 5:

            case 6:

            case 7:
          }
      break;
    }


  }

}
