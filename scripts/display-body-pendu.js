export function displayPendu(life) {
  const arrayBodyPendu = [
    "images/img-pendu-1.png",
    "images/img-pendu-2.png",
    "images/img-pendu-3.png",
    "images/img-pendu-4.png",
    "images/img-pendu-5.png",
    "images/img-pendu-6.png",
    "images/img-pendu-7.png",
    "images/img-pendu-8.png",
    "images/img-pendu-9.png",
    "images/img-pendu-10.png",
    "images/img-pendu-11.png",
  ];

  const imgBodies = document.querySelectorAll(".img-pendu img");

  for (let i = 0; i < arrayBodyPendu.length; i++) {
    if (i <= 10 - life) {
      imgBodies[i].classList.remove("content-hidden");
    }
    imgBodies[i].src = arrayBodyPendu[i];
  }
}
