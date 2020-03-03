//Define Variables
let blueChanger = document.getElementById("titleChanger");
let redChanger = document.getElementById("changeme");

//A few debugging print statements to make sure I'm getting the right values (buttons)
console.log(blueChanger.innerText);

console.log(redChanger.innerText);

//Choosing querySelectorAll to get all of my div tags
myDiv = document.querySelectorAll("div");

//Some more debugging statments
console.log(myDiv);


//My header is the second element so it's at the one index
myDivHeader = myDiv[1]

//Setting my 1 button to change to blue when clicked on
blueChanger.addEventListener("click", changingBlue);
function changingBlue(event) {
    myDivHeader.innerHTML = "<strong>1</strong>"
    myDivHeader.classList.add("newColorforOne");
    myDivHeader.classList.remove("newColorforTwo");
    
}
//Setting my 2 button to change to red and show 2 when clicked on
redChanger.addEventListener("click",changingRed);
function changingRed(event) {
    myDivHeader.innerHTML = "<strong> 2 </strong>";
    myDivHeader.classList.add("newColorforTwo");
    myDivHeader.classList.remove("newColorforOne");
    
}