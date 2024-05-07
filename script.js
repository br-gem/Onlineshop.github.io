const SignUpButton = document.querySelector("#SignInButton");
const SignInButton = document.querySelector("#SignUpButton");
const SignInForm = document.querySelector("#Signin");
const SignUpForm = document.querySelector("#Signup");

SignUpButton.addEventListener("click", () => {
  SignInForm.style.display = "none";
  SignUpForm.style.display = "block";
});

SignInButton.addEventListener("click", () => {
  SignInForm.style.display = "block";
  SignUpForm.style.display = "none";
});
