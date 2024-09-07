//an object
//properties --> variables in an object
//methods --> functions in an object

let city = {
  //properties
  cityName: "Norwich",
  cityPopulation: 205097,
  cityColours: ["green", "yellow"],
  cityTechCompany: {
    staff: ["Manny", "Sam", "Tim", "Frankie"],
    locations: ["Norwich", "Hull", "Leicester", "Ipswich", "Cambridge"],
  },
  //methods --> anonymous functions with a key
  greetVisitor: function () {
    console.log("Hello, loser!");
  },
  greetSpecificVisitor: function (visitor) {
    //this function has local scope!
    console.log(`Hello ${visitor}`);
  },
};

//how do I access the colour green?
console.log(city.cityColours[0]);

//how do I access the location Leicester?
console.log(city.cityTechCompany.locations[2]);

//how do I access the method?
console.log(city.greetVisitor());
console.log(city.greetSpecificVisitor("Tim"));

//you can use the properties of your object as the argument for the method inside the same object
console.log(city.greetSpecificVisitor(city.cityTechCompany.staff[0]));

//complex objects you have been using all along!

// console = {
//     log: function (message) {},
//   };

//Have a look at the console object!
console.log(console);

//the document element is an object!
// let document = {
//     body: {
//         textContent: "value"
//     }
//     style: {

//     },

// }
console.log("hello reprebates!");
const person = {
  name: "Nicky",
  age: 42,
  favouriteColour: "Green",
};

console.log(person);
console.table(person);
console.log(person.name); // Output: Nicky

console.log(person.age); // Output: 42

console.log(person.favouriteColour); // Output: green
person.favouriteFood = "Chips";
console.log(person.favouriteFood); // Output: chips

const car = {
  carMake: "Audi",
  carModel: "TT",
  carBodyStyle: "convertible",
  carColour: "Black",
  carName: "Audi Hepburn",
};

const book = {
  author: "Raymond E Feist",
  title: "Magician",
  numberOfPages: 796,
  yearFirstPublished: 1982,
};

console.table(car);
console.log(car);
console.table(book);
console.log(book);
