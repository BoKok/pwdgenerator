// Assignment code here


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

function generatePassword() {
  var length = window.prompt("What is the length of the password? (Min. 8 characters Max 128)");
  var upper = window.confirm("Include uppercase?");
  var lower = window.confirm("Include lowercase?");
  var numeric = window.confirm("Include numbers?");
  var special = window.confirm("Include special characters?");
  var pwdupr = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
  var pwdlwr = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"];
  var pwdnbr = ["1", "2", "3", "4", "5", "6", "7", "8", "9", "0"];
  var pwdspl = ["!", "#", "$", "%", "&", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "^", "_"];
  var base = [];
  
  if (length < 8 || length > 127 ) {
    window.alert("Your requirement is invalid, please try again.");
    return;
  }

  if (upper === false && lower === false && numeric === false && special === false) {
    window.alert("Please select at least one requirement.")
    return;
  }

  if (upper === true) {
    base = base.concat(pwdupr);
  }
  if (lower === true) {
    base = base.concat(pwdlwr);
  }
  if (numeric === true) {
    base = base.concat(pwdnbr);
  }
  if (special === true) {
    base = base.concat(pwdspl);
  }
  
  console.log(base);

  var randomArray = [];

  for(var i = 0; i < length; i++) {
    var random = base[Math.floor(Math.random() * base.length)];
    console.log(random);
    randomArray.push(random);
   }

   return randomArray.join("");
}

function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");
  passwordText.value = password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
