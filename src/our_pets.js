import { toBurgerOurPets } from "./js/toBurgerOur";
import { createCardOur } from "./js/createCardOur";
import { createNewArr } from "./js/newPetsArray";
import { createPages } from "./js/createPages";
import { paginatedCarousel } from "./js/paginatedCarousel";

let desktopRange = {
  min: 1280,
  max: 3440,
  numOfCards: 8,
};
let tabletRange = {
  min: 768,
  max: 1279,
  numOfCards: 6,
};
let mobileRange = {
  min: 318,
  max: 767,
  numOfCards: 3,
};

window.onload = function () {
  toBurgerOurPets();
  fetch("./assets/pets.json")
    .then((response) => response.json())
    .then((data) => {
      let longArray = createNewArr(data);
      let previousSize = document.documentElement.clientWidth;
      let currentSize = document.documentElement.clientWidth;
      let currentRange = checkRange(currentSize);

      let pages = createPages(longArray, currentRange.numOfCards);

      paginatedCarousel(pages);

      window.addEventListener("resize", () => {
        previousSize = currentSize;
        currentSize = document.documentElement.clientWidth;
        if (checkRange(currentSize) !== checkRange(previousSize)) {
          currentRange = checkRange(currentSize);
          pages = createPages(longArray, currentRange.numOfCards);
          document.querySelectorAll(".pet-card").forEach((e) => e.remove());
          paginatedCarousel(pages);
        }
      });
    });
};

function checkRange(size) {
  if (size >= desktopRange.min) {
    return desktopRange;
  }
  if (size >= tabletRange.min && size <= tabletRange.max) {
    return tabletRange;
  }
  if (size <= mobileRange.max) {
    return mobileRange;
  }

  console.log("ISSUE");
  console.log(size);
}
