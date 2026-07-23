let show_password = document.querySelectorAll(".show_eye");
let hide_password = document.querySelectorAll(".hide_eye");

show_password.forEach(el => el.style.display = "inline");
hide_password.forEach(el => el.style.display = "none");

let input_pass = document.querySelector("#p");
let input_Cpass = document.querySelector("#cp");
let input_signInPass = document.querySelector("#p_in");

function togglePasswordVisibility(index, isVisible) {
  show_password[index].style.display = isVisible ? "none" : "inline";
  hide_password[index].style.display = isVisible ? "inline" : "none";

  let targetInput = (index === 0) ? input_pass : (index === 1) ? input_Cpass : input_signInPass;
  if (targetInput) targetInput.type = isVisible ? "text" : "password";
}

function show1(index) { togglePasswordVisibility(index, true); }
function hide1(index) { togglePasswordVisibility(index, false); }
function show2(index) { togglePasswordVisibility(index, true); }
function hide2(index) { togglePasswordVisibility(index, false); }
function show3(index) { togglePasswordVisibility(index, true); }
function hide3(index) { togglePasswordVisibility(index, false); }

function NameCheck() {
  let form = document.forms["signUp"];
  let nameInput = form["Name"];
  let error1 = form.querySelector("h6.name");
  let englishRegex = /^[A-Za-z ]+$/;
  let name = nameInput.value;

  if (name.trim() == "") {
    showError(error1, nameInput, "× Name is required");
    return false;
  } else if (!englishRegex.test(name)) {
    showError(error1, nameInput, "× Name must contain only English letters");
    return false;
  } else if (name.length < 3) {
    showError(error1, nameInput, "× Name must be at least 3 characters");
    return false;
  } else {
    clearError(error1, nameInput);
    return true;
  }
}

function EmailCheck() {
  let isSignIn = document.querySelector("#form").classList.contains("up");
  let currentForm = isSignIn ? document.forms["signIn"] : document.forms["signUp"];
  let emailInput = currentForm["Email"];

  let errorElement = currentForm.querySelector("h6.email");
  if (!errorElement) {
    let errorIndex = isSignIn ? 4 : 1;
    errorElement = document.getElementsByClassName("error")[errorIndex];
  }

  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  let emailValue = emailInput.value;

  if (emailValue.trim() == "") {
    showError(errorElement, emailInput, "× Email is required");
    return false;
  } else if (!emailRegex.test(emailValue)) {
    showError(errorElement, emailInput, "× Not valid email address");
    return false;
  } else {
    clearError(errorElement, emailInput);
    return true;
  }
}

function password() {
  let isSignIn = document.querySelector("#form").classList.contains("up");
  let currentForm = isSignIn ? document.forms["signIn"] : document.forms["signUp"];
  let passwordInput = currentForm["Password"];
  let errorElement = currentForm.querySelector("h6.pass");

  let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
  let passwordValue = passwordInput.value;

  if (passwordValue.trim() == "") {
    showError(errorElement, passwordInput, "× Password is required");
    return false;
  } else if (!passwordRegex.test(passwordValue)) {
    showError(errorElement, passwordInput, "× Password must be 8+ chars with letters and numbers.");
    return false;
  } else {
    clearError(errorElement, passwordInput);
    return true;
  }
}

function cpassword() {
  let form = document.forms["signUp"];
  let passInput = form["Password"];
  let confirmInput = form["confirmPassword"];
  let error4 = document.querySelector('h6.Cpass');

  if (confirmInput.value.trim() === "") {
    showError(error4, confirmInput, "✖ Confirm password is required");
    return false;
  } else if (confirmInput.value !== passInput.value) {
    showError(error4, confirmInput, "✖ Passwords don't match");
    return false;
  } else {
    clearError(error4, confirmInput);
    return true;
  }
}

function showError(errorEl, inputEl, message) {
  if (errorEl) {
    errorEl.innerText = message;
    errorEl.style.color = "rgb(182, 28, 28)";
  }
  if (inputEl) inputEl.classList.add("E");
}

function clearError(errorEl, inputEl) {
  if (errorEl) errorEl.innerText = "";
  if (inputEl) inputEl.classList.remove("E");
}

function dataForm(event) {
  event.preventDefault();
  let isSignIn = document.querySelector("#form").classList.contains("up");

  if (!isSignIn) {
    let signUpForm = document.forms["signUp"];
    
    let isNameValid = NameCheck();
    let isEmailValid = EmailCheck();
    let isPassValid = password();
    let isCPassValid = cpassword();

    if (isNameValid && isEmailValid && isPassValid && isCPassValid) {
      signUpForm.querySelectorAll("input").forEach(input => input.classList.add("T"));

      let dateOfUser = {
        Name: signUpForm["Name"].value,
        Email: signUpForm["Email"].value,
        Password: signUpForm["Password"].value
      };
      
      localStorage.setItem("user", JSON.stringify(dateOfUser));
      localStorage.setItem("log", "loged");

      setTimeout(() => {
        window.location.href = "../pages/profile.html";
      }, 300);
    }
  } else {
    let signInForm = document.forms["signIn"];
    let email = signInForm["Email"].value;
    let pass = signInForm["Password"].value;

    let isEmailValid = EmailCheck();
    let isPassValid = password();

    if (isEmailValid && isPassValid) {
      let storedUser = JSON.parse(localStorage.getItem("user"));
      if (storedUser && storedUser.Email === email && storedUser.Password === pass) {
        signInForm.querySelectorAll("input").forEach(input => input.classList.add("T"));
        
        localStorage.setItem("log", "loged");
        
        setTimeout(() => {
          window.location.href = "profile.html";
        }, 300);
      } else {
        let errorS = document.querySelector(".errorS");
        if (errorS) {
          errorS.innerText = "✖ Invalid Email or Password";
          errorS.style.color = "rgb(182, 28, 28)";
        }
      }
    }
  }
}

function clearM(index) {
  let isSignIn = document.querySelector("#form").classList.contains("up");
  let errorM = document.getElementsByClassName("error");
  let input = document.getElementsByTagName("input");

  if (isSignIn) {
    let adjustedIndex = index === 1 ? 4 : 5;
    if (input[adjustedIndex]) input[adjustedIndex].classList.remove("E");
    if (errorM[adjustedIndex]) errorM[adjustedIndex].innerText = "";
    
    let errorS = document.querySelector(".errorS");
    if (errorS) errorS.innerText = "";
  } else {
    if (input[index]) input[index].classList.remove("E");
    if (errorM[index]) errorM[index].innerText = "";
  }
}

document.querySelector('#sec1 button').addEventListener('click', () => {
  document.querySelector("#form").classList.add('up');
});

document.querySelector('#sec2 button').addEventListener('click', () => {
  document.querySelector("#form").classList.remove('up');
});