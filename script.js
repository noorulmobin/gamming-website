const animationElement = document.getElementById("animatedtext");
let currentText = animationElement.textContent;

const phrases = [
  "Is our passion",
  "Is what we Love",
  "Is what we do",
  "Is who we are",
];

let index = 0;
setInterval(() => {
  index = (index + 1) % phrases.length;
  animationElement.textContent = phrases[index];
}, 3500);
