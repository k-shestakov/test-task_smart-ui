export function waveHand() {
  const hand = document.querySelector(".hand");

  hand.addEventListener("click", () => {
    hand.style.animation = "none";
    setTimeout(() => {
      hand.style.animation = "wave 1.5s ease-in-out";
    }, 10);
  });
}

waveHand();
