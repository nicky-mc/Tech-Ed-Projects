// variables can store one value at a time

let myName = "Nicky";

let anotherName = "Charlotte";
let anotherMemberOfStaff = "Zachary";

// arrays can store more than one value at a time!!
// we declare an array in the same way we declare a variable
// keywiord is still let
//an array uses square brackets you write a list of values inside the brackets
let myCollegues = ["Nicky", "Charlotte", "Zach", "John Cena"];
console.log(myCollegues);

// arrays have properties one of the properties we can use for example is length
// the length property tells me the total number of items in the array
myCollegues.length;
console.log(myCollegues.length);
//the index property
//the index tells me what position the array item is
//  the index starts at 0!!!

myCollegues[2];
console.log(myCollegues[2]);
//to add a new item you can use your index
// if we skip an index that index will have an undefined item
myCollegues[4] = "Nanou";
console.log(myCollegues);
console.log(myCollegues.length);
console.log(myCollegues[3]);
// you can use more than one type of  data i.e strings, numbers and booleans
let myFavouriteThings = ["my family", 13, false, "Chocolate", "Wrestling", "green", "Charlote"];
console.log(myFavouriteThings);
// there are some default array methods that we can use to add items at the endor ones to remove such as push and pop at begining middle or end!

console.log("I'm sorry Dave, I don't think I can do that");
let halQuotes = ["I'm putting myself to the fullest use, which is all I think that any concious entity can ever hope to do", "I'm Sorry Dave, I can't do that", "No 9000 computer has ever made a mistake", "Built for two"];
console.log(halQuotes); 

console.log(halQuotes[0]);
console.log(halQuotes[2]);
console.log(halQuotes[1]);

halQuotes[4] = "Good Afternoon, gentleman, I am a HAL 9000 computer";
console.log(halQuotes.length);
console.log(halQuotes);

let favouriteFoods = ["Chocolate", "Cheesecake", "Fajitas", "Chips", "schnitzel", "ramen"];
let favouriteColours = ["green", "khaki", "blue", "pink"];
let favouriteNumbers = [13, 42, 1981, 2];
console.log(favouriteColours, favouriteFoods, favouriteNumbers);
console.log(halQuotes, favouriteColours, favouriteFoods, favouriteNumbers);
console.log(favouriteFoods.length, favouriteColours.length, halQuotes.length, favouriteNumbers.length);

