console.log("G'day! Ya great big gallah!");
// to get data from input first we select our form element
const form = document.querySelector("form");
// we are going to add an event listener to our form
// event hanldler first
function handleSubmit(event) {
  event.preventDefault();
  //create an object to stoere the data from our inputs
  // we need the new keyword to make sure we create an instance of an object of our form object every time a new user inserts data
  const formData = new FormData(form);
  // the we use the following to collect our object template (formData) and parsing it into the syntax of a classic object example below
  const formValues = Object.fromEntries(formData);
  console.table(formValues);
}
// the FormData functiuon will  create an object wwhose properties will be the same as the attributes in out inputs
// constformData = {
// input:"Nicky",
// input:"d.mortozacowles@gmail.com",
// input:"secretpassword",
// };
//1, Created form with input types etc.
//2, Used the FormData method to turn the captured form data into an object.
//3, "Extracted" the form values from the new object in the format

// event listener
form.addEventListener("submit", handleSubmit);
// we need to prevent th default behavior of the submit event!
