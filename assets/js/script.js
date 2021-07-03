  // Assignment code here

  // variables
var charLength;
var confirmUpper;
var confirmLower;
var confirmNumber;
var confirmSpecial;

upperChars = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
lowerChars = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"]
specials = ["~", "!", "@", "#", "$", "%", "^", "&", "*", "?"]


function generatePassword() {
   charLength = prompt("How many characters would you like your password to be? (from 8-128)")
    if (!charLength) {
        alert("Enter a number.")
        generatePassword()
    }
    else if (charLength < 8 || charLength > 128) {
        alert("Must be from 8-128!")
        generatePassword()
    }
    else  {
       confirmUpper = confirm("Would you like your password to contain uppercase letters?")
       confirmLower = confirm("Would you like your password to contain lowercase letters?")
       confirmNumber = confirm("Would you like your password to contain numbers?")
       confirmSpecial = confirm("Would you like your password to contain special characters?")
    }
    if (!confirmUpper && !confirmLower && !confirmNumber && !confirmSpecial) {
        choices = alert("You must select at least one of the criteria!")
    }

}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);