export const createModal = (pet) => {
  const bodyMain = document.querySelector(".body");
  const bodyOur = document.querySelector(".body-our");

  if (bodyMain) {
    bodyMain.style.overflow = "hidden";
  }
  if (bodyOur) {
    bodyOur.style.overflow = "hidden";
  }

  const modalOverlay = document.createElement("div");
  modalOverlay.classList.add("overlay");
  modalOverlay.addEventListener("click", (event) => {
    if (event.target === modalOverlay) {
      closeModal();
    }
  });

  const modalBox = document.createElement("div");
  modalBox.classList.add("modal");

  const closeBtn = document.createElement("button");
  closeBtn.classList.add("close-modal-btn");
  closeBtn.addEventListener("click", closeModal);

  const icon = document.createElement("i");
  icon.classList.add("material-icons");
  icon.textContent = "close";
  closeBtn.appendChild(icon);

  const imgBox = document.createElement("div");
  imgBox.classList.add("modal-img-box");

  const image = document.createElement("img");
  image.classList.add("modal-img");
  image.src = pet.img;

  const modalContent = document.createElement("div");
  modalContent.classList.add("modal-content");

  const modalTitle = document.createElement("h2");
  modalTitle.classList.add("modal-title");
  modalTitle.textContent = pet.name;

  const modalSubTitle = document.createElement("h2");
  modalSubTitle.classList.add("modal-subtitle");
  modalSubTitle.textContent = `${pet.type} - ${pet.breed}`;

  const modalParagraph = document.createElement("p");
  modalParagraph.classList.add("modal-p");
  modalParagraph.textContent = pet.description;

  const modalList = document.createElement("ul");
  modalList.classList.add("modal-ul");

  const modalAge = document.createElement("li");
  modalAge.classList.add("modal-li");
  modalAge.innerHTML = `<span class="modal-highlight">Age: </span>${pet.age}`;

  const modalInoculations = document.createElement("li");
  modalInoculations.classList.add("modal-li");
  modalInoculations.innerHTML = `<span class="modal-highlight">Inoculations: </span>${pet.inoculations}`;

  const modalDiseases = document.createElement("li");
  modalDiseases.classList.add("modal-li");
  modalDiseases.innerHTML = `<span class="modal-highlight">Diseases: </span>${pet.diseases}`;

  const modalParasites = document.createElement("li");
  modalParasites.classList.add("modal-li");
  modalParasites.innerHTML = `<span class="modal-highlight">Parasites: </span>${pet.parasites}`;

  modalList.append(modalAge);
  modalList.append(modalInoculations);
  modalList.append(modalDiseases);
  modalList.append(modalParasites);

  modalContent.append(modalTitle);
  modalContent.append(modalSubTitle);
  modalContent.append(modalParagraph);
  modalContent.append(modalList);

  imgBox.append(image);

  modalBox.append(closeBtn);
  modalBox.append(imgBox);
  modalBox.append(modalContent);

  modalOverlay.append(modalBox);
  document.body.append(modalOverlay);

  function closeModal() {
    modalOverlay.remove();

    if (bodyMain) {
      bodyMain.style.overflow = "auto";
    }
    if (bodyOur) {
      bodyOur.style.overflow = "auto";
    }
  }
};
