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
  var length =receivePasswordLength(); 
  if( length<8 || length>128){
    alert('length does not work')
    return;
  }
  var upper = includeUpperCase();
 var lower =  includeLowerCase();
 var numbers = includeNumbers();
 var spec = includeSpecialCharacters();



//selectedtypes;
var selectedTypes = [];
var result = [];
var gurantee = [];

if(upper){
  selectedTypes =selectedTypes.concat(upperCaseArr);
  var randomNum = Math.floor(Math.random() * upperCaseArr.length);
  gurantee.push(upperCaseArr[randomNum])


};
if(lower){
  selectedTypes =selectedTypes.concat(lowerCaseArr);
  var randomNum = Math.floor(Math.random() * lowerCaseArr.length);
  gurantee.push(lowerCaseArr[randomNum])


}
if(numbers){
  selectedTypes =selectedTypes.concat(numberArr);
  var randomNum = Math.floor(Math.random() * numberArr.length);
  gurantee.push(numberArr[randomNum])

}

if(spec){
  selectedTypes =selectedTypes.concat(specialCharArr);
  var randomNum = Math.floor(Math.random() * specialCharArr.length);
  gurantee.push(specialCharArr[randomNum])
}

for (let i = 0; i < length; i++) {
  var randomNum = Math.floor(Math.random() * selectedTypes.length);
  result.push(selectedTypes[randomNum]);
}

for (let i = 0; i < gurantee.length; i++) {
    result[i] = gurantee[i];
  
}

console.log(gurantee)
console.log(result)
return result.join('');
}

function receivePasswordLength() {
  var passwordLength = prompt ("What password length do you want? Must choose between 8-128");
  return passwordLength;
}


function includeUpperCase() {
  var useUpperCase = confirm ("Would you like to include uppercase letters?");
  return useUpperCase;
//  if (useUpperCase === false); 
 // console.log(useUpperCase)
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

