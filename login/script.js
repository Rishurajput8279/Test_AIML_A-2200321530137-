
let button = document.querySelector(".loginBtn");
let username = document.querySelector("#username");
let password = document.querySelector("#password");
function login() {
  if (username.value == "admin" && password.value == "admin") {
    alert("Login Success");
  } else {
    alert("Login Failed");
  }
}
function takeUsername(e) {
  username.value = e.target.value;
}
function takePassword(e) {
  password.value = e.target.value;
}