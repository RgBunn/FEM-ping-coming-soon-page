const formEl = document.querySelector("form");
const emailEl = document.querySelector("#email");
const submitBtn = document.querySelector("#submit");
const errorMessage = document.querySelector(".error-message");
console.log(formEl);
console.log(emailEl);
console.log(submitBtn);

formEl.addEventListener("submit", submitForm);
submitBtn.addEventListener("click", submitForm);

function submitForm(e) {
  e.preventDefault();

  const email = emailEl.value;
  if (email === "" || !validateEmail(email)) {
    emailEl.style.borderColor = "hsl(354, 100%, 66%)";
    errorMessage.classList.remove("hidden");
    if (window.innerWidth < 768) emailEl.style.marginBottom = "40px";
  } else {
    alert("Success!");
    emailEl.value = "";
    emailEl.style.borderColor = "";
    errorMessage.classList.add("hidden");
  }
}

function validateEmail(email) {
  return /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email);
}
