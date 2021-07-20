// Pseudo Code 
// 1. Password Generator gives us a random password
// 2. User Specifies the password criteria
//         - Have user choose between:
//            - Length of Password (8-128)
//            - Upper Case
//            - Special Characters
//            - Numbers
//            - Lower Case
// 3. Computer derives a random password with user's specifications.

// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseArr = ["a" , "b" , "c" , "d" , "e", "f" , "g" , "h" , "i" , "j" , "k" , "l" , "m" , "n" , "o" , "p" , "q"];
var upperCaseArr = ["A" , "B" , "C" , "D" , "E" , "F" , "G" , "H" , "I" , "J" , "K" , "L" , "M" , "N" , "O" , "P" , "Q"];
var specialCharArr = ["!" , "@" , "$", "#" , "%" , "^" , "&" , "*" , "("];
var numberArr = ["1" , "2" , "3" , "4" , "5", "6" , "7" , "8" , "9" , "0"];


// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  //// presented with a series of prompts for password criteria
  receivePasswordLength(); 
  includeUpperCase();
}

function receivePasswordLength() {
  var passwordLength = prompt ("What password length do you want? Must choose between 8-128");
  if (passwordLength < 8 || passwordLength > 128){
    alert ("Must choose between 8-128 characters in length")
  } else {
    return +passwordLength}
  } 


function includeUpperCase() {
  var useUpperCase = confirm ("Would you like to include uppercase letters?");
  if (useUpperCase === faslse); {
}
  return includeUpperCase ();
}

function includeLowerCase() {
  var useLowerCase = confirm ("Would you like to include lowercase letters?");
  return useLowerCase;
}

function includeSpecialCharacters() {
  var useSpecialCharacters = confirm ("Would you like to include special characters?");
  return useSpecialCharacters;
}

function includeNumbers() {
  var useNumbers = confirm ("Would you like to incldue numbers?");
  return useNumbers;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

