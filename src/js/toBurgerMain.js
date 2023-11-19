export const toBurgerMain = () => {
  const burgerIconMain = document.querySelector("#burger");
  const navMenuMain = document.querySelector("nav");
  const bodyMain = document.querySelector(".body");
  const navLinksMain = document.querySelectorAll(".nav_link");
  const overlay = document.querySelector("#overlay-body");

  burgerIconMain.addEventListener("click", () => {
    navMenuMain.classList.toggle("active");
    burgerIconMain.classList.toggle("active");
    overlay.classList.toggle("overlay-body");
    if (navMenuMain.classList.contains("active")) {
      bodyMain.style.overflow = "hidden";
    } else if (!navMenuMain.classList.contains("active")) {
      bodyMain.style.overflow = "auto";
    }
  });
  bodyMain.addEventListener("click", (e) => {
    console.log(e.target);
    if (
      !navMenuMain.contains(e.target) &&
      !burgerIconMain.contains(e.target) &&
      navMenuMain.classList.contains("active")
    ) {
      navMenuMain.classList.remove("active");
      burgerIconMain.classList.remove("active");
      overlay.classList.remove("overlay-body");
      bodyMain.style.overflow = "auto";
    }
  });

  navLinksMain.forEach((link) => {
    link.addEventListener("click", () => {
      navMenuMain.classList.remove("active");
      burgerIconMain.classList.remove("active");
      overlay.classList.remove("overlay-body");
      bodyMain.style.overflow = "auto";
    });
  });
};
