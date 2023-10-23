# Web software project
 
# HTML
## 1/5 Basic HTML structure is present.
* Can be found throughout the html code(s).(Headings, paragraphs, links, images etc).
## 2/5 HTML structure with clear content differentiation (headings, paragraphs, lists)
* Can be found throughout the html code(s).
## 3/5 Use of forms, links and media.
* Can be found throughout the html code(s). Example Forms in survey.html, Links in index (Link to wikipedia in index.html below Did you know? header), Media on the bottom of index.html
## 4/5 Tables are effectively used
* In index.html in the middle of the page. Tells the habitation of capybaras.
## 5/5 Consistent use of semantic HTML throughout, ensuring better structure and understanding of the content.
* Can be found throughout the html code(s). I used Nav, Header, Menu.  

# CSS
## 1/5 Basic CSS styling (colors, fonts).
* Can be found from my css file and visiting my pages to see the actual ouput.
## 2/5 Use of classes and IDs to style specific elements.
* There is Classes and ID's on html and css.
## 3/5 Implementation of responsive design elements.
* Responsive design elements for other devices. Can be found on css file on @media only screen and (max-width: 768px) function. Website scales on different resolutions.
## 4/5 Use of layouts for advanced user interfaces (arrays, float, flexbox, css grid)
* Most of the classes use flexbox design. This can be seen on styles.css for example. 
## 5/5 Styling demonstrates a strong grasp of layout principles, aesthetics, and user experience.
* I hope so.

# Javascript
## 1/5 Simple interactions (like alerts on button click).
* When clicking on survey.html submit button. It uses simple button which alerts (notifies) the user. (Commented on theme.js)
## 2/5 Multiple event listeners and basic DOM manipulations.
* Contact.html uses event listener. When clicked a button it triggers alert. Can be found in assets/scripts/theme.js(I have it commented). Bucketlist.html contains another event listener in assets/scripts/theme.js. Basic DOM manipulation happens in bucketlist.html
## 3/5 Use of arrays, objects, and functions.
* Functions can be seen throughout the assets/scripts/theme.js. Array can be seen on theme.js. The output of that can be seen on survey.html. There is a clear indication of array.
## 4/5 Advanced logic, looping through data, and dynamic DOM updates.
* Looping through data can be found on theme.js and the output can be seen on survey.html. Dynamic DOM updates can be seen on the bucketlist.html by adding, marking and removing from the list.
## 5/5 Consistent use of Object-Oriented JavaScript principles.
* Did not use.

# Asynchronous Operations
## 1/5 Use of timers.
* I used timer as a clock on the navigation bar. Can be seen when accessing pages. 
## 2/5 Successful implementation of an AJAX call or Fetch.
* Can be found on NASA.index. I Implemented NASA API that fetches the asteroids sighted close by in a specific time. 
## 3/5 Data from the asynchronous call is displayed on the webpage.
* Clicking submit from the NASA.html, (From Asteroids page) launches a function called asteroid from theme.js which fetches value from the API and can be seen on the Asteroids page (After waiting a while).
## 4/5 Error handling is implemented (for failed API calls, etc.).
* I used try, catch method. If the fetch fails, the catch will report an error "Error happenings". Can be found on theme.js asteroid() function.
## 5/5 Effective use of asynchronous data to enhance user experience (like filtering, sorting).
* The NASA API fetches values from the API and the values are filtered. I chose to filter in the asteroids Id, Name, diameter(max), Diameter(min) and is it hazardous. For the code itself it can be seen on theme.js on asteroid function. 

The raw json before filtering: 
!(Json)[assets/pictures/asteroid.png]