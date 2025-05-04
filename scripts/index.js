// mob menu
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


// nav scroll
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


// review text
document.querySelectorAll(".review").forEach((review) => {
  const originalText = review.textContent.trim();
  const temp = document.createElement("div");
  temp.style.position = "absolute";
  temp.style.visibility = "hidden";
  temp.style.width = review.offsetWidth + "px";
  temp.style.lineHeight = getComputedStyle(review).lineHeight;
  temp.style.font = getComputedStyle(review).font;
  temp.textContent = originalText;
  document.body.appendChild(temp);

  if (temp.offsetHeight > 93) {
    const maxHeight = 93;
    let low = 0,
      high = originalText.length,
      mid,
      truncated = originalText;

    while (low < high) {
      mid = Math.floor((low + high) / 2);
      temp.textContent = originalText.slice(0, mid);
      if (temp.offsetHeight <= maxHeight) {
        low = mid + 1;
        truncated = originalText.slice(0, mid);
      } else {
        high = mid;
      }
    }

    review.textContent = truncated;
    review.setAttribute("data-collapsed", "true");

    review.addEventListener("click", () => {
      const isCollapsed = review.getAttribute("data-collapsed") === "true";
      review.textContent = isCollapsed ? originalText : truncated;
      review.setAttribute("data-collapsed", String(!isCollapsed));
    });
  }

  document.body.removeChild(temp);
});
