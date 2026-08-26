function rollDice(){
   const numOfDice = document.getElementById("input").value;
   const diceResult = document.getElementById("diceResult");
   const diceImages = document.getElementById("diceImages");
   const values = [];
   const images = [];

   for(let i = 0; i < numOfDice; i++){
      const value = Math.floor(Math.random() * 6) + 1; // random between 1 - 6
      values.push(value);
      images.push(`<img src="assets/face_${value}.png" alt="Dice ${value}">`);
   }

   diceResult.textContent = `Result: ${values.join(', ')}`;
   diceImages.innerHTML = images.join('');
}