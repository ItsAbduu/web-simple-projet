// Global script
const copy = document.getElementById("copy");

let date = new Date();

let year = date.getFullYear();

copy.innerText += " " + year;
copy.style.fontWeight = "600";

const hum = document.querySelector("#hamburger");
const nav = document.querySelector(".mobile-nav");

hum.addEventListener("click", function (e) {
  e.stopPropagation();
  nav.classList.toggle("visible");
});

document.body.addEventListener("click", function () {
  if (nav.classList.contains("visible")) {
    nav.classList.remove("visible");
  }
});
