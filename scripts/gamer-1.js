export function runPlayer1() {
  initListenerRandomWord();
}

function initListenerRandomWord() {
  const btnGenerateWord = document.querySelector(".btn-generate-word");
  btnGenerateWord.addEventListener("click", async () => {
    const inputG1 = document.getElementById("input-G1");
    inputG1.value = await apiRandomWord();
  });
}

async function apiRandomWord() {
  const response = await fetch("https://trouve-mot.fr/api/random/1");
  const word = await response.json();
  return word[0].name;
}

export function endPlayer1() {
  hiddenBlockG1();
}

function hiddenBlockG1() {
  const divGamer1 = document.querySelector(".content-game");
  divGamer1.classList.add("content-hidden");
  divGamer1.classList.remove("content-game");
  const headerBlockG1 = document.querySelector(".header-block");
  headerBlockG1.classList.remove("header-block");
  headerBlockG1.classList.add("content-hidden");
}
