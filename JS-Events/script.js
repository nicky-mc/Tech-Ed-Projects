console.log(document);
//document is a representation of your html file
// how do I manipulate  the button  in JS?
// first we select our button so we can use it in our JavaScript
// you can use query selector getElementByID\Class

const myButton = document.querySelector("button");
console.log(myButton);

// next we are going to make our button interactive with an event

//an event has two parts:
//1 an event handler --> this is the action we want ot happen when a user interacts with our HTML element
//2 the event listener --> amd element that listens for user interactio namd triggers the evemt handler
// first we are going to build the event handler

function handleClick() {
    console.log("you have clicked my button ;-)");
}
//second we need to set up our event listener
//addEventListener has two arguments
myButton.addEventListener("click", handleClick);

// here we used handleClick fnction as an argument as we did in our callback module
//we are going to have a button that counts how many clicks the user does

const myCountingButton = document.getElementById("count-button");
//we need this variable in global scope, so the event listener has access to this as well
let clicks = 0;  // Declare clicks outside the function
//event handler
function handleCounting() {
    clicks = clicks + 1;  // Increment the click count
    console.log(clicks);  // Log the current count
    myCountingButton.textContent = `You have clicked ${clicks}`;
    //   "You have clicked " + clicks
}
//event listener
myCountingButton.addEventListener("click", handleCounting);

const colorButton = document.getElementById("color-changer");

function random(number) {
  return Math.floor(Math.random() * (number + 1));
}

colorButton.addEventListener("click", () => {
  const rndCol = `rgb(${random(255)} ${random(255)} ${random(255)})`;
  document.body.style.backgroundColor = rndCol;
});

//callback function recap

// function sayHello() {
//   console.log("Hello!");
// }

// function greet(greeting) {
//   greeting();
// }

// greet(sayHello);
