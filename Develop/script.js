// Assignment Code
var generateBtn = document.querySelector("#generate");
var lowerCaseArr = ["a" , "b" , "c" , "d" , "e"];
var upperCaseArr = ["A" , "B" , "C" , "D" , "E"];
var specialCharArr = ["!" , "@" , "#"];
var numberArr = ["1" , "2" , "3" , "4" , "5"];

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

function generatePassword() {
  //// presented with a series of prompts for password criteria
    var length = prompt("length of pswd . must be between 8 and 128");
   // console.log(length)

  if (length < 8 ) {
    console.log('length too short');
    return;
  } 
  if (length > 128) {
    console.log ("length too long");
    return;
}
console.log(length)
}

console.log(lowerCaseArr){
  
}
}


// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);