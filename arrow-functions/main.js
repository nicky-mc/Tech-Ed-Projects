// classic style
//function greet() {
// console.log("oi");
//}

//arrow function
//const greet = () => {
//  console.log("haha dweeb");
//};
// / regular function (event listener)

//function handleSubmit(event) {
// event.preventDefault();
// const username = event.target.username.value;
//const message = event.target.message.value;

//console.log({ username: username, message: message });
//}

//form.addEventListener("submit", handleSubmit);

const handleSubmit = (event) => {
  event.preventDefault();
  const username = event.target.username.value;
  const message = event.target.message.value;

  console.log({ username, message });
};
//=====================

//regular function (event listener) – anonymous
button.addEventListener("click", function () {
  let count = 0;
  count += 1;
});
// button.addEventListener("click", () => {
// let count = 0;
// count += 1;
//});

//===================

//regular function (forEach)
games.forEach((element) => {
  const h2 = document.createElement("h2");
  const p = document.createElement("p");
  const img = document.createElement("img");
});

//===================

async function getPosts() {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
}
const getPosts = async () => {
  const response = await fetch("https://jsonplaceholder.typicode.com/posts");
  const data = await response.json();
  return data;
};
//===================

//Feel free to add new arrow functions here
//Why not adding a server endpoint using an arrow function?
