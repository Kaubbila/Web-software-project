function theme() {
   const element = document.body;
   element.classList.toggle("dark-mode");
}
//Basic alert
function submit() {
   alert("Your submit was received!");
}
//Event listener.
document.addEventListener("DOMContentLoaded", function() {
   function submit() {
       alert("Your submit was received!");
   }
   const submitButton = document.getElementById("submitButton");
   submitButton.addEventListener("click", submit);
});

const prices = ["Socks", "Sandals", "Capybara", "Redemption", "World peace"];
document.getElementById("array").innerHTML = prices;

let text = "";
for (let i = 0; i < prices.length; i++) {
   text += prices[i] + "<br>";
 }
 document.getElementById("loop").innerHTML = text;

//Timer
function startTime() {
   const today = new Date();
   let h = today.getHours();
   let m = today.getMinutes();
   let s = today.getSeconds();
   m = checkTime(m);
   s = checkTime(s);
   document.getElementById('timer').innerHTML =  h + ":" + m + ":" + s;
   setTimeout(startTime, 1000);
 }
 
 function checkTime(i) {
   if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
   return i;
 }