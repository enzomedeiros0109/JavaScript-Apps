// HTML Tags
const hoursLabel = document.getElementById("hours");
const select = document.getElementById("select");

function updateClock(){

   const now = new Date();
   const selectedZone = select.value;

   const options = {
      hour: "2-digit",
      minute: "2-digit",
      second: "2-digit",
      hour12: true
   }

   if (selectedZone !== "auto"){
      options.timeZone = selectedZone;
   }

   hoursLabel.textContent = now.toLocaleString(undefined, options);
}

select.addEventListener("change", updateClock);

updateClock();
setInterval(updateClock, 1000);

