function toggleMenu() {
  const menu = document.querySelector(".mob_menu");
  const menuBtn = document.querySelector(".burger_menu");
  const menuExitBtn = document.querySelector(".burger_menu_exit");
  const body = document.body;

  menu.classList.toggle("visible_mob_menu");

  const menuVisible = menu.classList.contains("visible_mob_menu");

  if (menuVisible) {
    menuBtn.style.display = "none";
    menuExitBtn.style.display = "block";
    body.classList.add("no-scroll");
  } else {
    menuBtn.style.display = "block";
    menuExitBtn.style.display = "none";
    body.classList.remove("no-scroll");
  }
}

let lastScrollTop = 0;
const navbar = document.getElementById("navbar");

window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

  if (scrollTop > lastScrollTop) {
    navbar.classList.add("nav_hidden");
  } else {
    navbar.classList.remove("nav_hidden");
  }

  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

document.querySelectorAll('.mob_menu a[href^="#"]').forEach((link) => {
  link.addEventListener("click", function (e) {
    const menu = document.querySelector(".mob_menu");
    const menuBtn = document.querySelector(".burger_menu");
    const menuExitBtn = document.querySelector(".burger_menu_exit");
    const body = document.body;

    menu.classList.remove("visible_mob_menu");
    menuBtn.style.display = "block";
    menuExitBtn.style.display = "none";
    body.classList.remove("no-scroll");
  });
});
