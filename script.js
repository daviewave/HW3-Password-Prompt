// Pre-written Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", getNewPassLength, writePassword);

// Get the Users desired length of their new password
function getNewPassLength() {
  var passLength = prompt(
    "ENTER A NUMBER BETWEEEN 8-128 TO BE THE NEW LENGTH OF YOUR PASSWORD:",
    "length"
  );

  if (passLength < 8 || passLength > 128) {
    if (passLength < 8) {
      alert(
        "ERROR: " +
          passLength +
          " CHARACHTER'S IS LESS THAN THE MINIMUM LENGTH ALLOWED FOR NEW PASSWORD"
      );
    } else if (passLength > 128) {
      alert(
        "ERROR: " +
          passLength +
          " CHARACHTER'S IS MORE THAN THE MAXIMUM LENGTH ALLOWED FOR NEW PASSWORD"
      );
    }
    /*Actually have no idea why this code would return false even when passLength console.logged an int value...
      // else if (!Number.isInteger(passLength)) {
      // alert("ERROR: MUST ENTER NUMERIC VALUE");
      // }
    */
    getNewPassLength();
  } else {
    return passLength;
  }
}

function getNewPassCharacterTypes() {
  // isUpperCase,
  // isNumeric,
  // isSpecialCharacter;
}

/*Added Code*/
/*create a function addEventListener to handle when the user clicks generate button//
  //if(user clicks generate button)
    //Display the password criteria to the user
    //1. Ask user to enter the desired length of their password
      //Check to make sure int entered is at least 8 characters and no more than 32 characters
    //2. Ask the user the type of characters to be used when generating their password 
      //2.a. Would you like to include lowercase characters in your new password?
      //2.b. Would you like to include uppercase characters in your new password?
      //2.c. Would you like to include numeric characters in your new password?
      //2.d. Would you like to include special characters in your new password?
    //3. Checks to make sure user input is saved and at least one character type was selected by user
    //4. If all user prompts are complete, the users answers are used to generate their personalized password
    //5. Show the user their newly generated password in an alert on the top of the page */
