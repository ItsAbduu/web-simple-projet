// script to handle contact page

const contactForm = document.querySelector(".contact-form");
const modal = document.getElementById("formModal");
const closeModalButton = document.getElementById("closeModal");

contactForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const p = document.querySelector(".error");

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const subject = document.getElementById("subject").value.trim();
  const message = document.getElementById("message").value.trim();

  if (!name || !email || !subject || !message) {
    p.innerHTML = "Veuillez remplir tous les champs";
    return;
  }

  if (!isValidEmail(email)) {
    alert("Veuillez entrer une adresse email valide.");
    return;
  }

  document.getElementById("modalName").textContent = name;
  document.getElementById("modalEmail").textContent = email;
  document.getElementById("modalSubject").textContent = subject;
  document.getElementById("modalMessage").textContent = message;

  modal.style.display = "flex";

  contactForm.reset();
});

closeModalButton.addEventListener("click", function () {
  modal.style.display = "none";
});

window.addEventListener("click", function (event) {
  if (event.target === modal) {
    modal.style.display = "none";
  }
});

function isValidEmail(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}
