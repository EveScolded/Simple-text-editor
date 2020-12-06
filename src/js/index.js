import "../scss/main.scss";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */

const saveButton = document.querySelector(".buttons__content--save-js");

const entryInput = document.querySelector(".textarea__content--js");

saveButton.addEventListener("click", () => {
  localStorage.setItem("entry", entryInput.value);
});

const loadButton = document.querySelector(".buttons__content--load-js");

loadButton.addEventListener("click", () => {
  const entry = localStorage.getItem("entry");

  let result = "";

  if (entry) {
    result = entry;
  }
  entryInput.value = result;
});

const clearButton = document.querySelector(".buttons__content--clear-js");

clearButton.addEventListener("click", () => {
    entryInput.value = '';    
})
