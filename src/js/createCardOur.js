import { createModal } from "./createModal";
export const createCardOur = (pet) => {
  const parent = document.querySelector(".our-pets-cards-container");

  const container = document.createElement("div");
  container.classList.add("pet-card");
  container.addEventListener("click", () => {
    console.log("click");
    createModal(pet);
  });

  const image = document.createElement("img");
  image.classList.add("pet-card-img");
  image.src = pet.img;

  const petName = document.createElement("h3");
  petName.classList.add("pet-card-name");
  petName.textContent = pet.name;

  const btn = document.createElement("button");
  btn.classList.add("pet-card-btn");
  btn.textContent = "Learn more";

  container.append(image);
  container.append(petName);
  container.append(btn);

  parent.append(container);
};
