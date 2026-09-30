const modal = document.querySelector(".modal");
const openModalButton = document.querySelector(".mail__btn");
const closeModalButton = document.querySelector(".modal__exit");

openModalButton.addEventListener("click", () => {
  modal.classList.add("modal--open");
});

closeModalButton.addEventListener("click", () => {
  modal.classList.remove("modal--open");
});

document.addEventListener("keydown", (event) => {
  if (event.key === "Escape") {
    modal.classList.remove("modal--open");
  }
});
