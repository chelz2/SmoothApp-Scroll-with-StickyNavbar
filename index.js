document.addEventListener("DOMContentLoaded", function () {
  const header = document.querySelector(".header");

  function toggleNavTransparency() {
    if (window.screenY > 0) {
      header.classList.add("transparent");
    } else {
      header.classList.remove("transparent");
    }
  }

  window.addEventListener("scroll", toggleNavTransparency);
});
