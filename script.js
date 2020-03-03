//Define Variables
let blueChanger = document.getElementById("titleChanger");
let redChanger = document.getElementById("changeme");

//A few debugging print statements to make sure I'm getting the right values (buttons)
console.log(blueChanger.innerText);

console.log(redChanger.innerText);

//Choosing querySelectorAll to get all of my div tags
myDiv = document.querySelectorAll("div");

console.log(myDiv);
myDivHeader = myDiv[1]
blueChanger.addEventListener("click", changingBlue);
function changingBlue(event) {
    myDivHeader.innerHTML = "<strong>1</strong>"
    myDivHeader.classList.add("newColorforOne");
    
}

redChanger.addEventListener("click",changingRed);
function changingRed(event) {
    myDivHeader.innerHTML = "<strong> 2 </strong>";
    myDivHeader.classList.add("newColorforTwo");
    
}