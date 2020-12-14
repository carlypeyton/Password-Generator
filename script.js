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
  length = parseInt(prompt("How many characters do you want your password to be? Password must be between 8 to 128 characters long."));
    //If answer to length not a number answer, less than 8 or greater than 128 characters, user is prompted to enter number again
    if (length < 8 || length > 128) {
        alert("Password must be more than 8 characters and less than 128. Please try again.");
        return;
    } else if (isNaN(length) === true) {
        alert("Invalid response. Please try again.");
        return;
    }
    //User choices for characters. Confirm to include.
    confirmLowerCase = confirm("Do you want to include lowercase characters in your password?");
    confirmUpperCase = confirm("Do you want to include uppercase characters in your password?");
    confirmNumber = confirm("Do you want to include numbers in your password?");
    confirmSpecialCharacters = confirm("Do you want to include special characters in your password?");
    //If user does not confirm any character types, they are alerted they must select at least one character type
    if (confirmLowerCase === false && confirmUpperCase === false && confirmNumber === false && confirmSpecial === false) {
        alert("Please select at least one character type.");
        return;
    } else { }
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

// Call generatePassword function
generatePassword();

// Write randomlyGeneratedPassword in password box, by finding password ID 
document.getElementById("password").innerHTML = randomlyGeneratedPassword;

//Function to generate password based on user responses to confirms.
//If character type selected, a random character from within that string type is added to the passwordCharacters string.
function generatePassword() {
  randomlyGeneratedPassword = "";
    if (confirmLowerCase) {
        passwordCharacters += lowerCase;
    }
    if (confirmUpperCase) {
        passwordCharacters += upperCase;
    }
    if (confirmNumber) {
        passwordCharacters += numbers;
    }
    if (confirmSpecialCharacters) {
        passwordCharacters += specialCharacters;
    }
     //As long as the length of the password is less than the length the user input, a random 
    //character from within the passwordCharacters will be selected and added to randomlyGeneratedPassword
    for (let i = 0; i < length; i++) {
      randomlyGeneratedPassword += passwordCharacters.charAt(
          Math.floor(Math.random() * passwordCharacters.length)
      );
  }
  //Return FINAL PASSWORD
  return randomlyGeneratedPassword;
}