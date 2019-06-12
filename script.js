const form  = document.getElementsByTagName('form')[0];
const email = document.getElementById('email');
const emailError = document.getElementById('emailError');


email.addEventListener("blur", function (event) {
  if (!email.validity.valid) {
  	emailError.innerHTML = "please enter a valid email"
  	email.classList.add("invalid")
  } else {
  	emailError.innerHTML = "";
  	email.classList.remove("invalid");
  }
});

const emailConfirm = document.getElementById('emailConfirm')

emailConfirm.addEventListener("blur", function (event) {
  if (email.value !== emailConfirm.value) {
  	document.getElementById('confirmEmailError').innerHTML = "email does not match"
  	emailConfirm.classList.add("invalid")
  } else {
  	document.getElementById('confirmEmailError').innerHTML = "";
  	emailConfirm.classList.remove("invalid");
  }
});

const country = document.getElementById('country')

country.addEventListener("blur", function (event) {
  if (country.value.length < 3) {
  	document.getElementById('countryError').innerHTML = "please enter a valid country";
  	country.classList.add("invalid")
  }  else {
  	document.getElementById('countryError').innerHTML = "";
  	country.classList.remove("invalid");
  }
});

const zip = document.getElementById('zip')

zip.addEventListener("blur", function (event) {
  if (!zip.validity.valid) {
  	document.getElementById('zipError').innerHTML = "please enter a valid email"
  	zip.classList.add("invalid")
  } else {
  	document.getElementById('zipError').innerHTML = "";
  	zip.classList.remove("invalid");
  }
});

const pass = document.getElementById('pass')

pass.addEventListener("blur", function (event) {
  if (pass.value.length < 6) {
  	document.getElementById('passError').innerHTML = "password shoud be at least 6 characters"
  	pass.classList.add("invalid")
  } else {
  	document.getElementById('passError').innerHTML = "";
  	pass.classList.remove("invalid");
  }
});

const passConfirm = document.getElementById('passConfirm')

passConfirm.addEventListener("blur", function (event) {
  if (passConfirm.value !== pass.value) {
  	document.getElementById('confirmPassError').innerHTML = "password does not match";
  	passConfirm.classList.add("invalid");
  } else {
  	document.getElementById('confirmPassError').innerHTML = ""
  	passConfirm.classList.remove("invalid");
  }
});