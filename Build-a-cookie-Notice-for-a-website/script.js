console.log("om nom nom");
const cookieNotice = document.getElementById("cookieNotice");
const declineButton = document.getElementById("decline");
const acceptButton = document.getElementById("accept");

declineButton.addEventListener("click", function () {
  console.log("no cookie");
  cookieNotice.style.display = "none";
  document.cookie = "cookiesAccepted=false; max-age=31536000"; 
});

acceptButton.addEventListener("click", function () {
  console.log("Cooookieeee");
  cookieNotice.style.display = "none";
  document.cookie = "cookiesAccepted=true; max-age=31536000"; 
});

const cookiesAccepted = document.cookie.includes("cookiesAccepted=true");
if (!cookiesAccepted) {
  cookieNotice.style.display = "block";
}
