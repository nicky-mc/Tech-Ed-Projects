//types of loops
//!We always expect the looop to stop!!
// for loop ---> a loop we use to repeat an action for a limited ammount of times
// structure of a for loop
//initialisation is the starting value
//conditon  ---> we set this to ensure the loop ends
// while the conditon is truthy the loop will stop.
//afterthought --> this increases or decreases the intial value to ensure we reach the conditon
//repeated action --> the action we want to repeat
//for (initialisation; condition; afterthought){repeated action}
//   example of for loop
// increment operator ++ increases a value by 1
//the decrement operator -- decreases value by 1
for (let i = 0; i < 11; i++) {
  console.log("I'm Sorry Dave, I'm afraid I can't do that");
}
//while loops
//we use while loops to run an action for an unlimited number of times or when we don't know exactly the specific number of times
// example to to not show content until user logs in
//structure
// keyword While
//while (condition) {
//a repeated action
//}
//! an example of how not to write a while loop as this will keep running and will need you to reboot your computer
//!let counter = 1;
//!while (counter < 5) {
//!  console.log("Not 5 yet");
//!}
//! add an increment to make sure you finish the loop
// !counter ++;
//for .... of loops:
// this a concise version of a for loop
let techStack = ["html", "css", "js", "node.js", "git"];
// we can use the length of the array as our conditon so here 5 times
// index --> is "js"(index always starts at 0
for (let language of techStack) {
  console.log(language);
}
// language is an empty variable so it repeats bck our for...of loop's array
//forEach --> is an array method
let nameArray = ["Nicky", "Charlotte", "Zachary", "John Cena"];
nameArray.forEach((number) => {
  console.log(number);
});

let names = ["Nicky", "Charlotte", "Zachary", "John Cena"];
names.forEach(function (names) {
  //this is an annonymous function  we use anonymous functions when we only want to use them once and never call again
  // callback functions that we use with methods (like forEach) tend to be anonymous
  console.log(names);
});
//a classic for loop array

let food = ["pasta", "Ramen", "burgers", "sushi", "fishNchips"];
// the initial value is 0 to match the first item in the array
for (let i = 0; i < food.length; i++) {
  console.log(food[i]);
}
// i<5 and i<=4 will run the same ammount of times
// food.length will work as it'll fit to the size of the array

// Workshop!!
