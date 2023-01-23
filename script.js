var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
    // Ask the user for the desired criteria
    var length = prompt("Enter the desired length of the password (8-128 characters):");
    var lowercase = confirm("Include lowercase characters?");
    var uppercase = confirm("Include uppercase characters?");
    var numeric = confirm("Include numeric characters?");
    var special = confirm("Include special characters?");
  
    var password = generatePassword(length, lowercase, uppercase, numeric, special);
    var passwordText = document.querySelector("#password");
  
    passwordText.value = password;
}

function generatePassword(length, lowercase, uppercase, numeric, special) {
    let password = "";
    let charTypes = "";
    let possibleChars = "";
  
    if (lowercase) {
        charTypes += "abcdefghijklmnopqrstuvwxyz";
        possibleChars += "abcdefghijklmnopqrstuvwxyz";
    }
    if (uppercase) {
        charTypes += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
        possibleChars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    }
    if (numeric) {
        charTypes += "0123456789";
        possibleChars += "0123456789";
    }
    if (special) {
        charTypes += "!@#%^&*()_+-=[]{}|;':\",.<>?";
        possibleChars += "!@#%^&*()_+-=[]{}|;':\",.<>?";
    }
  
    if (charTypes.length === 0) {
        return "Error: At least one character type must be selected.";
    }
  
    if (length < 8) {
        return "The password must be at least 8 characters long.";
    }

     if (length > 128) {
        return "Password exceeds the maximum length (128 characters)";
    }

    for (let i = 0; i < length; i++) {
        password += possibleChars.charAt(Math.floor(Math.random() * possibleChars.length));
    }
  
    return password;
}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);
