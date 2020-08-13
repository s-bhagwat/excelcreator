const mNumber = document.getElementById("mNumber");
const wNumber = document.getElementById("wNumber");
const pNumber = document.getElementById("pNumber");
const pincode = document.getElementById("pinCode");

const form = document.getElementById("form");
const errorElement = document.getElementById("error");

form.addEventListener("submit", (e) => {
  let messages = [];

  if (!Number.isInteger(Number(mNumber.value))) {
    messages.push("Please input a valid mobile number");
  }
  if (mNumber.value.length !== 10) {
    messages.push("Please input a 10 digit mobile number");
  }
  // if (!Number.isInteger(Number(wNumber.value))) {
  //   messages.push("Please input a valid whatsapp number");
  // }
  // if (wNumber.value.length !== 10) {
  //   messages.push("Please input a 10 digit whatsapp number");
  //}
  if (!Number.isInteger(Number(pNumber.value))) {
    messages.push("Please input a valid phone number");
  }
  if (pNumber.value.length !== 10) {
    messages.push("Please input a 10 digit phone number");
  }
  if (!Number.isInteger(Number(pincode.value))) {
    messages.push("Please input a valid pincode");
  }
  if (pincode.value.length !== 6) {
    messages.push("Please input a 6 digit pincode");
  }

  if (messages.length > 0) {
    e.preventDefault();
    errorElement.innerHTML = "<p>" + messages.join("</p><p>") + "</p>";
  } else {
    document.getElementById("success").classList.remove("before");
    document.getElementById("success").classList.add("after");
  }
});

function checkSelect() {
  if (document.getElementById("type").value === "Individual-1") {
    document.getElementById("bcireg").value = "N.A.";
    document.getElementById("bcireg").readOnly = true;
  }
  if (
    document.getElementById("type").value === "Firm-2" ||
    document.getElementById("type").value === "Company-3"
  ) {
    document.getElementById("bcireg").readOnly = false;
    document.getElementById("bcireg").value = "";
  }
}

function changeAddress(id) {
  let address = document.getElementById("address").value;
  document.getElementById(id).value = address;
}

function checkAddress() {
  if (document.getElementById("alc").checked === true) {
    changeAddress("addresslLang");
    document.getElementById("addresslLang").readOnly = true;
  }
  if (document.getElementById("alc").checked === false) {
    document.getElementById("addresslLang").value = "";
    document.getElementById("addresslLang").readOnly = false;
  }
}
function checkAddress_2() {
  if (document.getElementById("aoc").checked === true) {
    changeAddress("officeAddress");
    document.getElementById("officeAddress").readOnly = true;
  }
  if (document.getElementById("aoc").checked === false) {
    document.getElementById("officeAddress").value = "";
    document.getElementById("officeAddress").readOnly = false;
  }
}

function changeNumber(id) {
  let number = document.getElementById("mNumber").value;
  document.getElementById(id).value = number;
}
function checkNumber() {
  if (document.getElementById("whatsappCheck").checked === true) {
    changeNumber("wNumber");
    document.getElementById("wNumber").readOnly = true;
  }
  if (document.getElementById("whatsappCheck").checked === false) {
    document.getElementById("wNumber").value = "";
    document.getElementById("wNumber").readOnly = false;
  }
}
function checkNumber_2() {
  if (document.getElementById("phoneCheck").checked === true) {
    changeNumber("pNumber");
    document.getElementById("pNumber").readOnly = true;
  }
  if (document.getElementById("phoneCheck").checked === false) {
    document.getElementById("pNumber").value = "";
    document.getElementById("pNumber").readOnly = false;
  }
}

function changeName(id) {
  let name = document.getElementById("fullName").value;
  document.getElementById(id).value = name;
}
function checkName() {
  if (document.getElementById("nameCheck").checked === true) {
    changeName("localName");
    document.getElementById("localName").readOnly = true;
  }
  if (document.getElementById("nameCheck").checked === false) {
    document.getElementById("localName").value = "";
    document.getElementById("localName").readOnly = false;
  }
}
