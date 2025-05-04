const gallery = document.querySelectorAll(".rev_gallery");
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");
const closeBtn = document.querySelector(".close");
const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");

let images = [];
let currentIndex = 0;

gallery.forEach((g) => {
  const imgs = g.querySelectorAll(".gallery-img");
  imgs.forEach((img, index) => {
    img.addEventListener("click", () => {
      images = Array.from(imgs).map((i) => i.src);
      currentIndex = index;
      openLightbox();
    });
  });
});

function openLightbox() {
  lightbox.style.display = "block";
  lightboxImg.src = images[currentIndex];
}

function closeLightbox() {
  lightbox.style.display = "none";
}

function showPrev() {
  currentIndex = (currentIndex - 1 + images.length) % images.length;
  lightboxImg.src = images[currentIndex];
}

function showNext() {
  currentIndex = (currentIndex + 1) % images.length;
  lightboxImg.src = images[currentIndex];
}

closeBtn.addEventListener("click", closeLightbox);
prevBtn.addEventListener("click", showPrev);
nextBtn.addEventListener("click", showNext);
