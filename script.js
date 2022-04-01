var fullName = document.getElementById("fullName");
var email = document.getElementById("email");
var ph_number = document.getElementById("ph_number");
var age = document.getElementById("age");
var address = document.getElementById("address");
var gender_Male = document.getElementById("gender_Male");
var gender_Female = document.getElementById("gender_Female");
var react = document.getElementById("react");
var node = document.getElementById("node");
var java = document.getElementById("java");

function readFormData() {
  var formData = {};
  formData["fullName"] = fullName.value;
  formData["email"] = email.value;
  formData["ph_number"] = ph_number.value;
  formData["age"] = age.value;
  return formData;
}

function validate() {
  // name
  if (fullName.value == "" || fullName.value == null) {
    alert("Name field is blank ");
    fullName.focus();
    return false;
  }
  if (!/^[a-zA-Z]*$/g.test(fullName.value)) {
    alert("Invalid characters, only alphabets are allowed in the name");
    fullName.focus();
    return false;
  }
  if (fullName.value.length < 4 || fullName.value.length > 15) {
    alert("character between 5 and 15 allowed in name");
  }

  //   email

  if (email.value == "" || email.value == null) {
    alert("Email field is blank ");
    email.focus();
    return false;
  }

  if (!/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/.test(email.value)) {
    alert("invalid email address");
    email.focus();
    return false;
  }

  //   phone number
  if (ph_number.value == "" || ph_number.value == null) {
    alert("phone no field is empty");
  }
  if (!/^[6-9]\d{9}$/.test(ph_number.value)) {
    alert("Invalid phone no , only numbers allowed");
    ph_number.focus();
    return false;
  }

  //age
  if (age.value == "" || age.value == null) {
    alert("age field is empty");
    ph_number.focus();
    return false;
  }
  if (isNaN(age.value) || age.value < 1 || age.value > 100) {
    alert("The age must be a number between 1 and 100");
    age.focus();
    return false;
  }

  // gender

  if (gender_Female.checked == false && gender_Male.checked == false) {
    alert("please choose the gender");
    fullName.focus();
    return false;
  }

  // course
  if (
    react.checked == false &&
    node.checked == false &&
    java.checked == false
  ) {
    alert("please choose the course");
    fullName.focus();
    return false;
  }

  // address

  if (address.value == "" || address.value == null) {
    alert("address field is empty");
  }

  return true;
}

function insertRecord(data) {
  if (validate() == true) {
    var table = document.getElementById("myTable");
    var row = table.insertRow(2);
    var cell1 = row.insertCell(0);
    var cell2 = row.insertCell(1);
    var cell3 = row.insertCell(2);
    var cell4 = row.insertCell(3);
    var cell5 = row.insertCell(4);

    cell1.innerHTML = data.fullName;
    cell2.innerHTML = data.email;
    cell3.innerHTML = data.ph_number;
    cell4.innerHTML = data.age;
    cell5.innerHTML = ` <a onClick="onEdit(this)"> <button style="background-color:orange"> Edit </button> </a><a onClick="onDelete(this)"> <button style="background-color:red" > Delete</button>  </a> `;

    console.log(
      cell1.innerHTML,
      cell2.innerHTML,
      cell3.innerHTML,
      cell4.innerHTML
    );
  }
}

function resetForm() {
  if (validate() == true) {
    fullName.value = "";
    email.value = "";
    ph_number.value = "";
    age.value = "";
    address.value = "";
    selectedRow = null;
  }
}

function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  fullName.value = selectedRow.cells[0].innerHTML;
  email.value = selectedRow.cells[1].innerHTML;
  ph_number.value = selectedRow.cells[2].innerHTML;
  age.value = selectedRow.cells[3].innerHTML;
  // address.value = selectedRow.cells[4].innerHTML;
}

function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.fullName;
  selectedRow.cells[1].innerHTML = formData.email;
  selectedRow.cells[2].innerHTML = formData.ph_number;
  selectedRow.cells[3].innerHTML = formData.age;
}

function onDelete(td) {
  if (confirm("Are you sure to delete this record ?")) {
    row = td.parentElement.parentElement;
    document.getElementById("myTable").deleteRow(row.rowIndex);
    resetForm();
  }
}
var selectedRow = null;

function onFormSubmit() {

  
  if (validate()) {
    var formData = readFormData();

    console.log(formData);

    if (selectedRow == null) insertRecord(formData);
    else updateRecord(formData);
    console.log(formData);

    resetForm();
  }
}
