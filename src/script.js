const menuToggle = document.querySelector("#menu-button");
const menuToggleHamburger = document.querySelector(
  "#menu-button_icon-hamburger",
);
const menuToggleClose = document.querySelector("#menu-button_icon-close");
const menuList = document.querySelector("#menu-list");
const body = document.body;

menuToggle.addEventListener("click", function () {
  document.body.classList.toggle("h-screen");
  document.body.classList.toggle("overflow-hidden");

  menuToggleHamburger.classList.toggle("hidden");
  menuToggleHamburger.classList.toggle("block");
  menuToggleClose.classList.toggle("hidden");
  menuToggleClose.classList.toggle("block");
  menuToggle.classList.toggle("aria-expanded");

  menuToggle.classList.toggle("fixed");
  if (menuToggle.classList.contains("aria-expanded")) {
    menuToggle.setAttribute("aria-expanded", "true");
  } else {
    menuToggle.setAttribute("aria-expanded", "false");
  }

  menuList.classList.toggle("flex");
  menuList.classList.toggle("hidden");
});
