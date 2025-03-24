export function burger() {
  const body = document.body;
  const burgerMenu = document.querySelector(".menu__icon");
  const menuList = document.querySelector(".menu__list");

  burgerMenu.addEventListener("click", () => {
    body.classList.toggle("menu-active");
  });

  menuList.addEventListener("click", (e) => {
    if (e.target.closest(".menu__link")) {
      body.classList.remove("menu-active");
    }
  });
}

burger();
