export const createArrows = () => {
  const carouselWapper = document.querySelector(".carousel-wrapper");
  const arrLeftButton = document.createElement("div");
  arrLeftButton.classList.add("arr-button-div-left");
  const arrLeft = document.createElement("span");
  arrLeft.textContent = "←";

  arrLeftButton.append(arrLeft);

  const arrRightButton = document.createElement("div");
  arrRightButton.classList.add("arr-button-div-right");
  const arrRight = document.createElement("span");
  arrRight.textContent = "→";
  arrRightButton.append(arrRight);

  carouselWapper.insertAdjacentElement("afterend", arrLeftButton);
  carouselWapper.insertAdjacentElement("afterend", arrRightButton);
};
