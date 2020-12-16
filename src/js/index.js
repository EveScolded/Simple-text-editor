import "../scss/main.scss";

// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* zapipsywanie do local storage */

const saveButton = document.querySelector(".buttons__content--save-js");

const entryInput = document.querySelector(".textarea__content--js");

saveButton.addEventListener("click", () => {
  localStorage.setItem("entry", entryInput.value);
});


/* wyświetlanie treści zapisanej w local storage */

const loadButton = document.querySelector(".buttons__content--load-js");

loadButton.addEventListener("click", () => {
  const entry = localStorage.getItem("entry");

  let result = "";

  if (entry) {
    result = entry;
  }
  entryInput.value = result;
});


/* usuwanie treści z textarea i local storage*/

const clearButton = document.querySelector(".buttons__content--clear-js");

clearButton.addEventListener("click", () => {
    entryInput.value = ''; 
    localStorage.removeItem("entry");   
});


/* font style */

const btnFontSelect = document.querySelector(".editor__button--fontStyle-js");

function fontSelect() {
  const selector = document.getElementById("select");
  const value = selector[selector.selectedIndex].value;
  entryInput.style.fontFamily = value;
}

btnFontSelect.addEventListener("change", fontSelect);


/* font size */

const btnFontSize = document.querySelector(".editor__button--fontSize-js");

function fontSize () {
 const fontSizeInput = document.getElementById("FontSize");
 const size = fontSizeInput.value;
 console.log(size);
 entryInput.style.fontSize = `${size}px`; 
}
btnFontSize.addEventListener("click", fontSize);


/* pogrubienie */

const btnBold = document.querySelector(".editor__button--bold-js");

function fontBolder() {
  entryInput.classList.toggle("editor__button--bold");
}
btnBold.addEventListener("click", fontBolder);

/* pogrubienie - wciśnięty button */

let isONB = false;

btnBold.addEventListener("click", () => {
  if (isONB == false) {
    document.documentElement.style.setProperty("--bacground-color-B", "rgb(211, 210, 203)");
    document.documentElement.style.setProperty("--button-shadow-B", "1px 1px 2px 0 #000000");
    isONB = true;
  } else {
    document.documentElement.style.setProperty("--bacground-color-B", "#fff");
    document.documentElement.style.setProperty("--button-shadow-B", "1px 1px 16px 0 #000000");
    isONB = false;
  }
});


/* podkreślenie */

const btnUnderline = document.querySelector(".editor__button--underline-js");

function fontUnderline() {
  entryInput.classList.toggle("editor__button--underline");
}
btnUnderline.addEventListener("click", fontUnderline);

/* podkreślenie - wciśnięty button */

let isONU = false;

btnUnderline.addEventListener("click", () => {
  if (isONU == false) {
    document.documentElement.style.setProperty("--bacground-color-U", "rgb(211, 210, 203)");
    document.documentElement.style.setProperty("--button-shadow-U", "1px 1px 2px 0 #000000");
    isONU = true;
  } else {
    document.documentElement.style.setProperty("--bacground-color-U", "#fff");
    document.documentElement.style.setProperty("--button-shadow-U", "1px 1px 16px 0 #000000");
    isONU = false;
  }
});


/* kursywa */

const btnItalic = document.querySelector(".editor__button--italic-js");

function fontItalic() {
  entryInput.classList.toggle("editor__button--italic");
}
btnItalic.addEventListener("click", fontItalic);

/* kursywa - wciśnięty button */

let isONI = false;

btnItalic.addEventListener("click", () => {
  if (isONI == false) {
    document.documentElement.style.setProperty("--bacground-color-I", "rgb(211, 210, 203)");
    document.documentElement.style.setProperty("--button-shadow-I", "1px 1px 2px 0 #000000");
    isONI = true;
  } else {
    document.documentElement.style.setProperty("--bacground-color-I", "#fff");
    document.documentElement.style.setProperty("--button-shadow-I", "1px 1px 16px 0 #000000");
    isONUI = false;
  }
});



