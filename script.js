let passLenSlider = document.querySelector("#passLenSlider");
let passLen = document.querySelector("#passLen");
let display = document.querySelector("#display");
let checkNum = document.querySelector("#checkNum");
let checkSymbols = document.querySelector("#checkSymbols");
let generateButton = document.querySelector("#generateButton");
let allChar =
  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz!@#$%^&*()_0123456789";
let copy = document.querySelector(".fa-copy");

let changePassword = () => {
  let password = "";
  for (i = 0; i < passLen.value; i++) {
    password += allChar[Math.floor(Math.random() * allChar.length)];
    display.value = password;
  }
};
changePassword();

//to remove symbol
let removeSymbol = () => {
  if (checkSymbols.checked == false) {
    allChar = allChar.replace(/[^a-zA-Z0-9 ]/g, "");
    changePassword();
  } else {
    allChar += "!@#$%^&*()_";
    changePassword();
  }
  console.log(allChar);
};

//to remove the number
let removeNum = () => {
  if (checkNum.checked == false) {
    allChar = allChar.replace("0123456789", "");
    changePassword();
  } else {
    allChar += "0123456789";
    changePassword();
  }
  console.log(allChar);
};

//pasword change with slider
passLenSlider.addEventListener("change", () => {
  passLen.value = passLenSlider.value;
  changePassword();
});

//password change with button
generateButton.addEventListener("click", () => {
  changePassword();
});

//copy button
copy.addEventListener("click", () => {
  navigator.clipboard.writeText(display.value);
});
