import { createCardMain } from "./createCardMain";

const parent = document.querySelector(".our-pets-cards-container");
export const paginatedCarousel = (pages) => {
  const parent = document.querySelector(".our-pets-cards-container");

  const btnSTART = document.querySelector("#btn-start");
  const btnPREVIOUS = document.querySelector("#btn-previous");
  const btnCURRENT = document.querySelector("#btn-current");
  const btnNEXT = document.querySelector("#btn-next");
  const btnLAST = document.querySelector("#btn-last");

  let currentPageNumber = 0;
  createPageCards(currentPageNumber, pages);

  btnNEXT.addEventListener("click", () => {
    parent.innerHTML = "";
    currentPageNumber++;
    createPageCards(currentPageNumber, pages);
    numberContol(currentPageNumber);
    buttonDisable(currentPageNumber, pages);
  });

  btnPREVIOUS.addEventListener("click", () => {
    parent.innerHTML = "";
    currentPageNumber--;
    createPageCards(currentPageNumber, pages);
    numberContol(currentPageNumber);
    buttonDisable(currentPageNumber, pages);
  });
  btnLAST.addEventListener("click", () => {
    parent.innerHTML = "";
    currentPageNumber = pages.length - 1;
    createPageCards(currentPageNumber, pages);
    numberContol(currentPageNumber);
    buttonDisable(currentPageNumber, pages);
  });

  btnSTART.addEventListener("click", () => {
    parent.innerHTML = "";
    currentPageNumber = 0;
    createPageCards(currentPageNumber, pages);
    numberContol(currentPageNumber);
    buttonDisable(currentPageNumber, pages);
  });
};

function createPageCards(pageNum, pages) {
  let activeCardsonPage = pages[pageNum].map((pet) => createCardMain(pet));
  for (const card of activeCardsonPage) {
    parent.append(card);
  }
}

function numberContol(currentPageNumber) {
  document.querySelector("#btn-current").textContent = currentPageNumber + 1;
}

function buttonDisable(currentPageNumber, pages) {
  if (currentPageNumber == 0) {
    document.querySelector("#btn-start").classList.add("our-btn-inactive");
    document.querySelector("#btn-start").disabled = true;
    document.querySelector("#btn-start").classList.remove("our-btn-active");

    document.querySelector("#btn-previous").classList.add("our-btn-inactive");
    document.querySelector("#btn-previous").disabled = true;
    document.querySelector("#btn-previous").classList.remove("our-btn-active");

    document.querySelector("#btn-last").classList.add("our-btn-active");
    document.querySelector("#btn-last").disabled = false;
    document.querySelector("#btn-last").classList.remove("our-btn-inactive");

    document.querySelector("#btn-next").classList.remove("our-btn-inactive");
    document.querySelector("#btn-next").disabled = false;
    document.querySelector("#btn-next").classList.add("our-btn-active");
  } else if (currentPageNumber == pages.length - 1) {
    document.querySelector("#btn-next").classList.add("our-btn-inactive");
    document.querySelector("#btn-next").classList.remove("our-btn-active");
    document.querySelector("#btn-next").disabled = true;

    document.querySelector("#btn-last").classList.remove("our-btn-active");
    document.querySelector("#btn-last").classList.add("our-btn-inactive");
    document.querySelector("#btn-last").disabled = true;

    document.querySelector("#btn-previous").classList.add("our-btn-active");
    document
      .querySelector("#btn-previous")
      .classList.remove("our-btn-inactive");
    document.querySelector("#btn-previous").disabled = false;

    document.querySelector("#btn-start").classList.add("our-btn-active");
    document.querySelector("#btn-start").classList.remove("our-btn-inactive");
    document.querySelector("#btn-start").disabled = false;
  } else {
    document.querySelector("#btn-start").classList.remove("our-btn-active");
    document.querySelector("#btn-start").classList.add("our-btn-active");
    document.querySelector("#btn-start").disabled = false;

    document.querySelector("#btn-previous").classList.remove("our-btn-active");
    document.querySelector("#btn-previous").classList.add("our-btn-active");
    document.querySelector("#btn-previous").disabled = false;

    document.querySelector("#btn-next").classList.remove("our-btn-active");
    document.querySelector("#btn-next").classList.add("our-btn-active");
    document.querySelector("#btn-next").disabled = false;

    document.querySelector("#btn-last").classList.remove("our-btn-active");
    document.querySelector("#btn-last").classList.add("our-btn-active");
    document.querySelector("#btn-last").disabled = false;
  }
}
