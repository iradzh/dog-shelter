export const toBurgerOurPets = () => {
  const burgerIconOur = document.querySelector("#burger-our-pets");
  const navMenuOur = document.querySelector(".our-nav");
  const bodyOur = document.querySelector(".body-our");
  const navLinksOur = document.querySelectorAll(".nav_link_pets");
  const overlay = document.querySelector("#overlay-body");

  burgerIconOur.addEventListener("click", () => {
    navMenuOur.classList.toggle("active");
    burgerIconOur.classList.toggle("active");
    overlay.classList.toggle("overlay-body");

    if (navMenuOur.classList.contains("active")) {
      bodyOur.style.overflow = "hidden";
    } else if (!navMenuOur.classList.contains("active")) {
      bodyOur.style.overflow = "auto";
    }
  });

  bodyOur.addEventListener("click", (e) => {
    if (
      !navMenuOur.contains(e.target) &&
      !burgerIconOur.contains(e.target) &&
      navMenuOur.classList.contains("active")
    ) {
      navMenuOur.classList.remove("active");
      burgerIconOur.classList.remove("active");
      overlay.classList.remove("overlay-body");
      bodyOur.style.overflow = "auto";
    }
  });

  navLinksOur.forEach((link) => {
    link.addEventListener("click", () => {
      navMenuOur.classList.remove("active");
      burgerIconOur.classList.remove("active");
      overlay.classList.remove("overlay-body");
      bodyOur.style.overflow = "auto";
    });
  });
};
