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

 async function asteroids() {
   const url = "https://api.nasa.gov/neo/rest/v1/feed?start_date=2023-09-07&end_date=2023-09-08&api_key=GwaklowSvjyS3w6faYisQRX4yINhRzZRR86MgATb"
   let tableBody = document.getElementById("tbody")

      fetch(url).then(function(response) {
       return response.json();
     }).then(function(data) {
       console.log('DATA: ', data)
       const nearEarthObjects = data.near_earth_objects  
       console.log(nearEarthObjects)
       const objects = nearEarthObjects['2023-09-07']
       console.log('OBJECTS', objects.length)
       for(let i = 0; i < objects.length; i++) {
           const asteroidsOfTheDay = objects[i]
           console.log('AOD', asteroidsOfTheDay) 
           const id = asteroidsOfTheDay.id
           const name = asteroidsOfTheDay.name
           const diameterMax = asteroidsOfTheDay.estimated_diameter.meters.estimated_diameter_max
           const diameterMin = asteroidsOfTheDay.estimated_diameter.meters.estimated_diameter_min
           const hazardous = asteroidsOfTheDay.is_potentially_hazardous_asteroid
               tableBody.innerHTML += '<tr><td>' + id + '</td><td>' + name +'</td><td>' + diameterMax + '</td><td>' + diameterMin + '</td><td>' + hazardous + '</td></tr>'
       }
     }).catch(function(e) {
       console.log("Error happenings", e);
     });
}
