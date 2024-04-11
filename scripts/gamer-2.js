import { removeAccents } from "../scripts/init.js";

let life = 11;

export function runPlayer2(wordGamer1) {
  displayBlockG2();
  updateLife();
  wordToFind(wordGamer1);
  initListenervalidateLetter(wordGamer1);
  ArrayletterAlphabet();
}

function updateLife() {
  const displayLife = document.querySelector(".life");
  displayLife.innerHTML = life;
}

// Fonction qui affiche le contenu du joueur 2
function displayBlockG2() {
  const headerBlockG2 = document.querySelector(".header-block-G2");
  headerBlockG2.classList.remove("content-hidden");
  headerBlockG2.classList.add("header-block");
  const contentG2 = document.querySelector(".content-game");
  contentG2.classList.remove("content-hidden");
  const divAlphabet = document.querySelector(".div-alphabet");
  divAlphabet.classList.remove("content-hidden");
}

function wordToFind(wordGamer1) {
  const divWordToFind = document.querySelector(".word-to-find");
  console.log(wordGamer1);
  for (let i = 0; i < wordGamer1.length; i++) {
    const spanLetter = document.createElement("span");
    spanLetter.textContent = " _ ";
    divWordToFind.appendChild(spanLetter);
  }
}

function validateLetter(wordGamer1) {
  let letterG2 = document.getElementById("input-G2").value;
  letterG2 = removeAccents(letterG2).toLowerCase();
  let isValideLetter = compareLetterToWord(wordGamer1, letterG2);
  colorLetter(isValideLetter, letterG2);
}

function initListenervalidateLetter(wordGamer1) {
  const btnValidateLetter = document.querySelector(".btn-validate-G2");
  btnValidateLetter.addEventListener("click", () => {
    validateLetter(wordGamer1);
  });

  const enterValidateLetter = document.getElementById("input-G2");
  enterValidateLetter.addEventListener("keyup", (e) => {
    if (e.code === "Enter") {
      validateLetter(wordGamer1);
    }
  });
}

function compareLetterToWord(wordGamer1, letterG2) {
  const spanLetter = document.querySelectorAll(".word-to-find span");
  let myLetterFounded = false;
  for (let i = 0; i < wordGamer1.length; i++) {
    if (letterG2 === wordGamer1[i]) {
      spanLetter[i].innerText = letterG2;
      myLetterFounded = true;
    }
  }

  if (myLetterFounded === false && life > 0) {
    life--;
    updateLife();
  }

  return myLetterFounded;
}

function colorLetter(isValideLetter, letterG2) {
  const alphabetLetter = document.querySelectorAll(".div-alphabet-letter span");
  for (let i = 0; i < alphabetLetter.length; i++) {
    if (alphabetLetter[i].innerText.toLowerCase() === letterG2) {
      let colorClass = isValideLetter === true ? "letter-true" : "letter-false";
      alphabetLetter[i].classList.add(colorClass);
    }
  }
}

function ArrayletterAlphabet() {
  const alphabet = [
    "a",
    "b",
    "c",
    "d",
    "e",
    "f",
    "g",
    "h",
    "i",
    "j",
    "k",
    "l",
    "m",
    "n",
    "o",
    "p",
    "q",
    "r",
    "s",
    "t",
    "u",
    "v",
    "w",
    "x",
    "y",
    "z",
  ];

  const divAlphabet = document.querySelector(".div-alphabet-letter");
  for (let i = 0; i < alphabet.length; i++) {
    const letterAlphabet = document.createElement("span");
    letterAlphabet.textContent = alphabet[i];
    divAlphabet.appendChild(letterAlphabet);
    if ((i + 1) % 5 === 0) {
      divAlphabet.appendChild(document.createElement("br"));
    }
  }
}
