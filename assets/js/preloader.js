// Preloader
const preloader = document.querySelector("#preloader");
if (preloader) {
  setTimeout(() => {
    preloader.style.transition = "opacity 0.5s ease-in-out";
    preloader.style.opacity = "0";
    setTimeout(() => {
      preloader.remove();
    }, 500);
  }, 200);
}
