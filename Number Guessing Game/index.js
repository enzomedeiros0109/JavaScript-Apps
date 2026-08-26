// HTML Elements
const title = document.getElementById("title");
const label = document.getElementById("answer");
const input = document.getElementById("input");
const submit = document.getElementById("submitButton");

// Randomizer settings
const minNum = 1;
const maxNum = 100;
const answer = Math.floor(Math.random() * (maxNum - minNum + 1)) + minNum;

let attemps = 0;
let guess;
let running = true;

   title.textContent = `Guess my tempo (${minNum} - ${maxNum})`

   submit.onclick = function(){
      guess = Number(input.value);

      if (guess === answer){
         title.textContent = "Correct answer!"
      }
      else {
         title.textContent = "Not quite my tempo."
      }
   }