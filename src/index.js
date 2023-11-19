import { toBurgerMain } from "./js/toBurgerMain";
import { createCardMain } from "./js/createCardMain";
import { createArrows } from "./js/createArrows";
import { carousel } from "./js/carousel";

let desktopRange = {
  min: 1280,
  max: 3440,
};
let tabletRange = {
  min: 768,
  max: 1279,
};
let mobileRange = {
  min: 318,
  max: 767,
};

window.onload = function () {
  toBurgerMain();
  createArrows();

  fetch("./assets/pets.json")
    .then((response) => response.json())
    .then((data) => {
      carousel(data);

      let previousSize = document.documentElement.clientWidth;
      let currentSize = document.documentElement.clientWidth;

      window.addEventListener("resize", () => {
        previousSize = currentSize;
        currentSize = document.documentElement.clientWidth;
        if (checkRange(currentSize) !== checkRange(previousSize)) {
          document.querySelectorAll(".pet-card").forEach((e) => e.remove());
          carousel(data);
        }
      });
    });
};

function checkRange(size) {
  if (size >= desktopRange.min) {
    return "desktop";
  }
  if (size >= tabletRange.min && size < tabletRange.max) {
    return "tablet";
  }
  if (size >= mobileRange.min && size < mobileRange.max) {
    return "mobile";
  }
}
