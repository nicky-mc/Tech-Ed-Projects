const form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  const formData = new FormData(form);
  const colour = formData.get("colour");

  localStorage.setItem("colour", colour);
});
const colour = localStorage.getItem("colour");
if (color) {
  const input = document.querySelector("input");
  input.value = colour;
}
