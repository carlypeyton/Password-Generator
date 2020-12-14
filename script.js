// Assignment Code
var generateBtn = document.querySelector("#generate");

//Set possible values for each character type. Use strings to utilize charAt
var lowerCase = "abcdefghijklmnopqrstuvwxyz";
var upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
var numbers = "0123456789";
var specialCharacters = "!#$%&*+-<>=?@^";

//Define variables for each character type
var length;
var confirmLowerCase;
var confirmUpperCase;
var confirmNumber;
var confirmSpecialCharacters;

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
