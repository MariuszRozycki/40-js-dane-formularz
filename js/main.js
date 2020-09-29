const button = document.querySelector('button');
const name = document.getElementById('name');
const surname = document.getElementById('surname');
const phone = document.getElementById('phone');
const nameInputId = document.getElementById('fname');
const inputNameValue = nameInputId.value;
const surnameInputId = document.getElementById('lname');
const inputSurnameValue = surnameInputId.value;
const phoneInputId = document.getElementById('tel');
const inputPhoneValue = phoneInputId.value;

button.addEventListener('click', function () {
  name.innerText = inputNameValue;
  name.style.borderBottom = "1px black solid";
  surname.innerText = inputSurnameValue;
  surname.style.borderBottom = "1px black solid";
  phone.innerText = inputPhoneValue;
  phone.style.borderBottom = "1px black solid";
});