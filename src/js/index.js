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


/* usuwanie treści z textarea */

const clearButton = document.querySelector(".buttons__content--clear-js");

clearButton.addEventListener("click", () => {
    entryInput.value = '';    
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


/* podkreślenie */

const btnUnderline = document.querySelector(".editor__button--underline-js");

function fontUnderline() {
  entryInput.classList.toggle("editor__button--underline");
}
btnUnderline.addEventListener("click", fontUnderline);


/* kursywa */

const btnItalic = document.querySelector(".editor__button--italic-js");

function fontItalic() {
  entryInput.classList.toggle("editor__button--italic");
}
btnItalic.addEventListener("click", fontItalic);



