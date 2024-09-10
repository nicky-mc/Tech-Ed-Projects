async function getFoxes() {
  const response = await fetch("https://randomfox.ca/floof");
  console.log(response);
  // we need to translate(Parse) our response into JSON so we can manipulate the data
  //! we need to use await here
  const data = await response.json();
  console.log(data);
  // we need to filter the data to jsut get the image property we call this data wrangling
  const wrangledData = data.image;
  console.log(wrangledData);
  // this needs to be returned sp we can use it later
  return wrangledData;
}

// step one get the data from the api
// the async / await keywords are useed so our getFoxes() function returns the actual data from the fetch request, instead of giving us an immediate promise
// our code usually runs synchronously with our browser our getFoxes() function runs at the pace of the fetch request
// if you evert getr a promice that means oyu need to run some of your code asynchronously
//step two we are going to create a function that matches the api data that matches  the api datato an image element

const foxContainer = document.getElementById("fox-container");
async function createFoxes(foxUrl) {
  const foxImage = document.createElement("img");

  foxImage.src = foxUrl;
  foxImage.alt = "a picture of a fox";
  foxContainer.appendChild(foxImage);
}
//classic way of fetching prior to async
// fetch("https://randomfox.ca/floof"),
// .then(),
//.then(), excetera

// step 3 we need a functio nto call getFoxes() and createFoxes this way we maintain control over the data we want to use
async function addFoxesToPage() {
  const getFoxesData = await getFoxes();
  createFoxes(getFoxesData);
}
addFoxesToPage();
