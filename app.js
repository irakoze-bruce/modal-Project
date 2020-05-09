/** @format */
const modalBtn = document.querySelector(".modal-btn");
const closeBtn = document.querySelector(".close-btn");
const modalContainer = document.querySelector(".modal-overlay");

modalBtn.addEventListener("click", () => {
  modalContainer.classList.toggle("open-modal");
});

closeBtn.addEventListener("click", () => {
  modalContainer.classList.remove("open-modal");
});
