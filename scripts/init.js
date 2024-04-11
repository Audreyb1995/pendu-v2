import { runPlayer1, endPlayer1 } from "../scripts/gamer-1.js";
import { runPlayer2 } from "../scripts/gamer-2.js";

initGame();

function initGame() {
  runPlayer1();
  initListenerValidateWord();
}

export function removeAccents(word) {
  const accents = /[\u0300-\u036f]/g;
  return word.normalize("NFD").replace(accents, "");
}

function validateWord() {
  let wordGamer1 = document.getElementById("input-G1").value;
  wordGamer1 = removeAccents(wordGamer1).toLowerCase();
  endPlayer1();
  runPlayer2(wordGamer1);
}
function initListenerValidateWord() {
  const btnValidateWord = document.querySelector(".btn-validate-G1");
  btnValidateWord.addEventListener("click", () => {
    validateWord();
  });

  const enterValidateWord = document.getElementById("input-G1");
  enterValidateWord.addEventListener("keyup", (e) => {
    if (e.code === "Enter") {
      validateWord();
    }
  });
}
