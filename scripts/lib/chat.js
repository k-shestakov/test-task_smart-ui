export function interactWithChat() {
  const messangerButton = document.querySelector(".messanger__btn");
  const chatCloseButton = document.querySelector(".chat__close");
  const chat = document.querySelector(".chat");

  messangerButton.addEventListener("click", () => {
    chat.classList.toggle("chat--close");
  });

  chatCloseButton.addEventListener("click", () => {
    chat.classList.add("chat--close");
  });
}

interactWithChat();
