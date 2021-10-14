// Pre-written Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", getCriteria, writePassword);

function getCriteria() {
  /*1. Prompt user for new password length and make sure choice is within char limit*/
  var passLength = prompt(
    "ENTER A NUMBER BETWEEEN 8-128 TO BE THE NEW LENGTH OF YOUR PASSWORD:"
  );
  if (passLength < 8 || passLength > 128) {
    alert(
      "ERROR: " +
        passLength +
        " IS OUT OF THE ALLOWED PASSWORD LENGTH RANGE OF 8-128 "
    );
    getCriteria();
  }

  /*2. Prompt the user with the different character types that could be included in the new password*/
  //lowercase prompt
  do {
    var isLowerCase = confirm(
      "WOULD YOU LIKE LOWERCASE CHARACTERS TO BE USED IN YOUR NEW PASSWORD?"
    );
    //uppercase prompt
    var isUpperCase = confirm(
      "WOULD YOU LIKE UPPERCASE CHARACTERS TO BE USED IN YOUR NEW PASSWORD?"
    );
    //numerical prompt
    var isNumerical = confirm(
      "WOULD YOU LIKE NUMERICAL CHARACTERS TO BE USED IN YOUR NEW PASSWORD?"
    );
    //special character prompt
    var isSpecialCharacter = confirm(
      "WOULD YOU LIKE SPECIAL CHARACTERS TO BE USED IN YOUR NEW PASSWORD?"
    );
    //Make at least 1 character type was selected
    if (!isLowerCase && !isUpperCase && !isNumerical && !isSpecialCharacter) {
      alert("ERROR: MUST SELECT AT LEAST ONE CHARACTER TYPE");
    }
  } while (!isLowerCase && !isUpperCase && !isNumerical && !isSpecialCharacter);

  /*3. Create the password based of given criteria*/
  const lowerAlphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const upperAlphabet = [
    "A",
    "B",
    "C",
    "D",
    "E",
    "F",
    "G",
    "H",
    "I",
    "J",
    "K",
    "L",
    "M",
    "N",
    "O",
    "P",
    "Q",
    "R",
    "S",
    "T",
    "U",
    "V",
    "W",
    "X",
    "Y",
    "Z",
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];
  const specialCharacter = [
    ".",
    ":",
    ";",
    "!",
    "@",
    "#",
    "$",
    "%",
    "^",
    "&",
    "*",
  ];
  const numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  const characterTypes = [
    lowerAlphabet,
    upperAlphabet,
    specialCharacter,
    numbers,
  ];

  var randomCharacterType, randomCharacter;

  var getRandomInt = function (max, min) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  };

  //NEED EMPTY ARRAY TO STORE NEW PASSWORD
  var newPasswordArray = [];

  //1st for loop continues until the password is the length specified earlier by the user chooses a random number 0-3 which will be the index of 1/4 char types
  //2nd for loop chooses a random number 0-length of the array which will be the element selected for the current spot creating the new password
  for (var i = 0; i < passLength; i++) {
    randomCharacterType = getRandomInt(-1, 4);
    var chooseCharType = characterTypes[randomCharacterType];

    randomCharacter = getRandomInt(-1, chooseCharType.length);
    var chosenChar = chooseCharType[randomCharacter];

    newPasswordArray[i] = chosenChar;

    console.log(newPassword);
  }
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
