let show_password = document.querySelectorAll(".show_eye");
let hide_password = document.querySelectorAll(".hide_eye");

show_password[0].style.display = "inline";
hide_password[0].style.display = "none";
show_password[1].style.display = "inline";
hide_password[1].style.display = "none";
show_password[2].style.display = "inline";
hide_password[2].style.display = "none";

let input_pass = document.querySelector("#p");
let input_Cpass = document.querySelector("#cp");
let input_signInPass = document.querySelector("#p_in");

function show1(index) {
  show_password[index].style.display = "none";
  hide_password[index].style.display = "inline";
  input_pass.type = "text";
}

function hide1(index) {
  show_password[index].style.display = "inline";
  hide_password[index].style.display = "none";
  input_pass.type = "password";
}

function show2(index) {
  show_password[index].style.display = "none";
  hide_password[index].style.display = "inline";
  input_Cpass.type = "text";
}

function hide2(index) {
  show_password[index].style.display = "inline";
  hide_password[index].style.display = "none";
  input_Cpass.type = "password";
}

function show3(index) {
  show_password[index].style.display = "none";
  hide_password[index].style.display = "inline";
  input_signInPass.type = "text";
}

function hide3(index) {
  show_password[index].style.display = "inline";
  hide_password[index].style.display = "none";
  input_signInPass.type = "password";
}

function NameCheck() {
  let name = document.forms["signUp"]["Name"].value;
  let error1 = document.getElementsByClassName("error")[0];
  let input = document.getElementsByTagName("input");
  let englishRegex = /^[A-Za-z ]+$/;
  if (name.trim() == "") {
    error1.innerText = "× Name is required";
    error1.style.color = "rgb(182, 28, 28)";
    input[0].classList.add("E");
    return false;
  }
  else if (!englishRegex.test(name)) {
    error1.innerText = "× Name must contain only English letters";
    error1.style.color = "rgb(182, 28, 28)";
    input[0].classList.add("E");
    return false;
  }
  else if (name.length < 3) {
    error1.innerText = "× Name must be at least 3 characters";
    error1.style.color = "rgb(182, 28, 28)";
    input[0].classList.add("E");
    return false;
  }
  else {
    error1.innerText = "";
    return true;
  }
}

function EmailCheck() {
  let isSignIn = document.querySelector("#form").classList.contains("up");
  let emailValue = isSignIn ? document.forms["signIn"]["Email"].value : document.forms["signUp"]["Email"].value;
  let inputIndex = isSignIn ? 4 : 1;

  let error2 = document.getElementsByClassName("error")[errorIndex];
  let input = document.getElementsByTagName("input");
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailValue.trim() == "") {
    error2.innerText = "× Email is required";
    error2.style.color = "rgb(182, 28, 28)";
    input[inputIndex].classList.add("E");
    return false;
  }
  else if (!emailRegex.test(emailValue)) {
    error2.innerText = "× Not valid email address";
    error2.style.color = "rgb(182, 28, 28)";
    input[inputIndex].classList.add("E");
    return false;
  }
  else {
    error2.innerText = "";
    return true;
  }
}

function password() {
  let isSignIn = document.querySelector("#form").classList.contains("up");
  let passwordValue = isSignIn ? document.forms["signIn"]["Password"].value : document.forms["signUp"]["Password"].value;
  let errorIndex = isSignIn ? 5 : 2;
  let inputIndex = isSignIn ? 5 : 2;

  let error3 = document.getElementsByClassName("error")[errorIndex];
  let input = document.getElementsByTagName("input");
  let passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;

  if (passwordValue.trim() == "") {
    error3.innerText = "× Password is required";
    error3.style.color = "rgb(182, 28, 28)";
    input[inputIndex].classList.add("E");
    return false;
  }
  else if (!passwordRegex.test(passwordValue)) {
    error3.innerText = "× Password must be 8+ chars with letters and numbers.";
    error3.style.color = "rgb(182, 28, 28)";
    input[inputIndex].classList.add("E");
    return false;
  }
  else {
    error3.innerText = "";
    return true;
  }
}

function cpassword() {
  let password = document.forms["signUp"]["Password"].value;
  let confirm_password = document.forms["signUp"]["confirmPassword"].value;
  let error4 = document.getElementsByClassName("error")[3];
  let input = document.getElementsByTagName("input");
  if (confirm_password.trim() === "") {
    error4.innerText = "✖ Confirm password is required";
    error4.style.color = "rgb(182, 28, 28)";
    input[3].classList.add("E");
    return false;
  }
  else if (confirm_password !== password) {
    error4.innerText = "✖ Passwords don't match";
    error4.style.color = "rgb(182, 28, 28)";
    input[3].classList.add("E");
    return false;
  }
  else {
    error4.innerText = "";
    return true;
  }
}

function dataForm(event) {
  event.preventDefault();
  let input = document.getElementsByTagName("input");
  let isSignIn = document.querySelector("#form").classList.contains("up");

  if (!isSignIn) {
    let name = document.forms["signUp"]["Name"].value;
    let email = document.forms["signUp"]["Email"].value;
    let pass = document.forms["signUp"]["Password"].value;

    if (NameCheck() && EmailCheck() && password() && cpassword()) {
      input[0].classList.add("T");
      input[1].classList.add("T");
      input[2].classList.add("T");
      input[3].classList.add("T");
      let dateOfUser = {
        Name: name,
        Email: email,
        Password: pass
      }
      localStorage.setItem("user", JSON.stringify(dateOfUser));
      setTimeout(() => {
        window.location.href = "../pages/profile.html";
        localStorage.setItem("log", "loged");
      }, 300);
    }
  } else {
    let email = document.forms["signIn"]["Email"].value;
    let pass = document.forms["signIn"]["Password"].value;

    if (EmailCheck() && password()) {
      let storedUser = JSON.parse(localStorage.getItem("user"));
      if (storedUser && storedUser.Email === email && storedUser.Password === pass) {
        input[4].classList.add("T");
        input[5].classList.add("T");
        setTimeout(() => {
          window.location.href = "../pages/profile.html";
          localStorage.setItem("log", "loged");
        }, 300);
      } else {
        let errorS = document.querySelector(".errorS");
        errorS.innerText = "✖ Invalid Email or Password";
        errorS.style.color = "rgb(182, 28, 28)";
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
    input[adjustedIndex].classList.remove("E");
    errorM[adjustedIndex].innerText = "";
    document.querySelector(".errorS").innerText = "";
  } else {
    input[index].classList.remove("E");
    errorM[index].innerText = "";
  }
}

document.querySelector('#sec1 button').addEventListener('click', () => {
  document.querySelector("#form").classList.add('up');
});

document.querySelector('#sec2 button').addEventListener('click', () => {
  document.querySelector("#form").classList.remove('up');
});