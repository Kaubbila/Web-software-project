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