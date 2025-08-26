// =========================
// Part 1: Event Handling
// =========================
document.getElementById("msgBtn").addEventListener("click", function() {
  document.getElementById("msgOutput").textContent = "Button clicked! 🎉";
});


// =========================
// Part 2: Interactive Elements
// =========================

// 1. Dark mode toggle
document.getElementById("modeToggle").addEventListener("click", function() {
  document.body.classList.toggle("dark-mode");
});

// 2. Counter
let count = 0;
document.getElementById("increment").addEventListener("click", () => {
  count++;
  document.getElementById("count").textContent = count;
});
document.getElementById("decrement").addEventListener("click", () => {
  count--;
  document.getElementById("count").textContent = count;
});

// 3. Collapsible FAQ
const faq = document.querySelector(".faq");
const faqQuestion = faq.querySelector(".faq-question");

faqQuestion.addEventListener("click", () => {
  faq.classList.toggle("active");
  faqQuestion.querySelector("span").textContent = faq.classList.contains("active") ? "-" : "+";
});


// =========================
// Part 3: Form Validation
// =========================
document.getElementById("signupForm").addEventListener("submit", function(e) {
  e.preventDefault(); // prevent form from reloading page

  // Grab values
  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  // Error elements
  const nameError = document.getElementById("nameError");
  const emailError = document.getElementById("emailError");
  const passwordError = document.getElementById("passwordError");
  const formMessage = document.getElementById("formMessage");

  let isValid = true;

  // Reset errors
  nameError.textContent = "";
  emailError.textContent = "";
  passwordError.textContent = "";
  formMessage.textContent = "";

  // Validate Name
  if (name.length < 2) {
    nameError.textContent = "Name must be at least 2 characters";
    isValid = false;
  }

  // Validate Email (basic regex)
  const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
  if (!emailPattern.test(email)) {
    emailError.textContent = "Please enter a valid email address";
    isValid = false;
  }

  // Validate Password
  if (password.length < 6) {
    passwordError.textContent = "Password must be at least 6 characters";
    isValid = false;
  }

  // If valid
  if (isValid) {
    formMessage.textContent = "Form submitted successfully 🎉";
    formMessage.style.color = "green";
  } else {
    formMessage.textContent = "Please correct the errors above ❌";
    formMessage.style.color = "red";
  }
});
