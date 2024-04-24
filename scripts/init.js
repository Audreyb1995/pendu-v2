import { runPlayer1, endPlayer1 } from "../scripts/gamer-1.js";
import { runPlayer2 } from "../scripts/gamer-2.js";
import { listenerFaEye } from "../scripts/label-password.js";

initGame();

function initGame() {
  runPlayer1();
  initListenerValidateWord();
  listenerFaEye();
  rules();
}

export function removeAccents(word) {
  const accents = /[\u0300-\u036f]/g;
  return word.normalize("NFD").replace(accents, "");
}

function validateWord() {
  let wordGamer1 = document.getElementById("input-G1").value;
  wordGamer1 = removeAccents(wordGamer1).toLowerCase();
  const newRegExWord = /^[a-zA-Z]+$/;

  const errorMessage = document.querySelector(".error-message-G1 p"); // Sélectionne l'élément <p> à l'intérieur de l'élément avec la classe "error-message-G1"

  if (wordGamer1.length < 2) {
    errorMessage.textContent =
      "Vous devez inscrire un mot d'au moins deuxlettres !";
  } else if (!newRegExWord.test(wordGamer1)) {
    errorMessage.textContent = "Vous devez inscrire seulement des lettres !";
  } else {
    errorMessage.textContent = "";
    endPlayer1();
    runPlayer2(wordGamer1);
  }
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

function rules() {
  const btnRules = document.querySelector(".rules");
  btnRules.addEventListener("click", () => {
    Swal.fire({
      title: "Règles",
      text: "1. Le joueur 1 rentre un mot avec au moins deux lettres. 2. Le joueur 2 a 11 vies pour trouver le mot.",
      icon: "info",
      confirmButtonText: "Ok",
    });
  });
}
