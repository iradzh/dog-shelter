import { createCardMain } from "./createCardMain";
export const carousel = (pets) => {
  const itemLeft = document.querySelector(".item-left");
  const itemActive = document.querySelector(".item-active");
  const itemRight = document.querySelector(".item-right");

  const btnLeft = document.querySelector(".arr-button-div-left");
  const btnRight = document.querySelector(".arr-button-div-right");
  const carousel = document.querySelector(".carousel");

  let activePets = getRandom(pets);
  let activeCards = activePets.map((pet) => createCardMain(pet));
  for (const card of activeCards) {
    itemActive.append(card);
  }

  let rightPets = getRandom(filterPets(pets, activePets));
  let cardsRight = rightPets.map((pet) => createCardMain(pet));
  for (const card of cardsRight) {
    itemRight.append(card);
  }

  let leftPets = getRandom(filterPets(pets, activePets));
  let cardsLeft = leftPets.map((pet) => createCardMain(pet));
  for (const card of cardsLeft) {
    itemLeft.append(card);
  }

  const moveLeft = () => {
    carousel.classList.add("transition-left");
    btnLeft.removeEventListener("click", moveLeft);
    btnRight.removeEventListener("click", moveRight);
  };

  btnLeft.addEventListener("click", moveLeft);

  const moveRight = () => {
    carousel.classList.add("transition-right");
    btnLeft.removeEventListener("click", moveLeft);
    btnRight.removeEventListener("click", moveRight);
  };

  btnRight.addEventListener("click", moveRight);

  carousel.addEventListener("animationend", (animationEvent) => {
    if (animationEvent.animationName === "move-left") {
      carousel.classList.remove("transition-left");

      itemActive.innerHTML = "";
      for (const card of cardsLeft) {
        itemActive.append(card);
      }

      activePets = leftPets;

      itemRight.innerHTML = "";
      rightPets = getRandom(filterPets(pets, activePets));
      cardsRight = rightPets.map((pet) => createCardMain(pet));
      for (const card of cardsRight) {
        itemRight.append(card);
      }

      itemLeft.innerHTML = "";
      leftPets = getRandom(filterPets(pets, leftPets));
      cardsLeft = leftPets.map((pet) => createCardMain(pet));
      for (const card of cardsLeft) {
        itemLeft.append(card);
      }
    } else {
      carousel.classList.remove("transition-right");

      itemActive.innerHTML = "";
      for (const card of cardsRight) {
        itemActive.append(card);
      }

      activePets = rightPets;

      itemLeft.innerHTML = "";
      leftPets = getRandom(filterPets(pets, activePets));
      cardsLeft = leftPets.map((pet) => createCardMain(pet));
      for (const card of cardsLeft) {
        itemLeft.append(card);
      }

      itemRight.innerHTML = "";
      rightPets = getRandom(filterPets(pets, rightPets));
      cardsRight = rightPets.map((pet) => createCardMain(pet));
      for (const card of cardsRight) {
        itemRight.append(card);
      }
    }
    btnLeft.addEventListener("click", moveLeft);
    btnRight.addEventListener("click", moveRight);
  });
};

function getRandom(pets) {
  let cardNum;
  if (document.documentElement.clientWidth >= 1280) {
    cardNum = 3;
  } else if (
    document.documentElement.clientWidth >= 768 &&
    document.documentElement.clientWidth < 1279
  ) {
    cardNum = 2;
  } else if (
    document.documentElement.clientWidth >= 319 &&
    document.documentElement.clientWidth < 768
  ) {
    cardNum = 1;
  }
  const shuffled = pets.sort(() => 0.5 - Math.random());
  return shuffled.slice(0, cardNum);
}

function filterPets(pets, activePets) {
  let activePetsNames = activePets.map((p) => p.name);
  let result = [];

  for (let index = 0; index < pets.length; index++) {
    if (activePetsNames.indexOf(pets[index].name) < 0) {
      result.push(pets[index]);
    }
  }
  return result;
}
