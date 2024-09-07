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
    console.log("Hello, earthling!");
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
const blogPost = {
  title: "My first blog post",
  author: {
    name: "Bob",
    age: 30,
    favouriteColour: "red",
  },
  tags: ["coding", "javascript", "objects", "arrays"],
  content: "This is my blog post about learning objects and arrays.",
};
console.log(blogPost.author.name);
console.log(blogPost.tags[0]);
console.log(
  `There are ${blogPost.tags.length} tags for post "${blogPost.title}":`
);
for (let i = 0; i < blogPost.tags.length; i++) {
  console.log(blogPost.tags[i]);
}
console.log(`Tags for post "${blogPost.title}":`); // Output: Tags for post "My first blog post":
for (let tag of blogPost.tags) {
  console.log(tag); // Output: coding, javascript, objects, arrays
}
const myRamblings = {
  title: "My first Ramble",
  author: {
    name: "Nicky",
    age: 43,
    favouriteColour: "Green",
  },
  tags: [
    "The systematic removal of everyones rights step by step",
    "being trans",
    "make up tips for trans women",
    "coding",
  ],
  content: "This is my blog of all my random rambles.",
};
console.log(myRamblings.author.name);
console.log(myRamblings.tags[0]);
console.log(
  `There are ${myRamblings.tags.length} tags for post "${myRamblings.title}":`
);
for (let i = 0; i < myRamblings.tags.length; i++) {
  console.log(myRamblings.tags[i]);
}
console.log(`Tags for post "${myRamblings.title}":`); // Output: Tags for post "My first blog post":
for (let tag of myRamblings.tags) {
  console.log(tag);
}
