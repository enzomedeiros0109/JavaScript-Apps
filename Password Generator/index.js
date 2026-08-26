const passwordLength = 12;
const includeLowerCase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

function handleGenerate(){
   const length = document.getElementById("length").value;
   const includeLowerCase = document.getElementById("lowercase").checked;
   const includeUppercase = document.getElementById("uppercase").checked;
   const includeNumbers = document.getElementById("numbers").checked;
   const includeSymbols = document.getElementById("symbols").checked;

   const password = generatePassword(length,
                                    includeLowerCase,
                                    includeUppercase,
                                    includeNumbers,
                                    includeSymbols)


   document.getElementById("result").textContent = `Your password is ${password}`;
}

function generatePassword(length, includeLowerCase, includeUppercase, includeNumbers, includeSymbols){

   const lowercaseChars = "abcdefghijklmnopqrstuvwxyz"
   const uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
   const numberChars = "0123456789"
   const symbolChars = "!@#$%¨&*()_+"

   let allowedChars = "";
   let password = "";

   allowedChars += includeLowerCase ? lowercaseChars : "";
   allowedChars += includeUppercase ? uppercaseChars : "";
   allowedChars += includeNumbers ? numberChars : "";
   allowedChars += includeSymbols ? symbolChars : "";

   if (length <= 0) return "Passoword length must be at least 1";

   if (allowedChars.length === 0) return "Select at least one option";

   for (let i = 0; i < length; i++){
      const randomIndex = Math.floor(Math.random() * allowedChars.length)

      password += allowedChars[randomIndex]
   }

   console.log(password)
   return password;
}