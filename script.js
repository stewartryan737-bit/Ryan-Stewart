// template_tpcg7qi
// service_m004u3n
// qdgmN2q9T0G5ELbWg

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector(".modal__overlay--loading");
  const success = document.querySelector(".modal__overlay--success");
  loading.classList += " modal__overlay--visible";
  emailjs.sendForm('service_m004u3n', 'template_tpcg7qi', event.target, 'qdgmN2q9T0G5ELbWg')
    .then(() => {
      loading.classList.remove("modal__overlay--visible");
      success.classList += " modal__overlay--visible";
    })
    .catch((error) => {
      loading.classList.remove("modal__overlay--visible");
      alert("The email service is temporarily unavailable. Please contact me directly at stewartryan737@gmail.com");
    });
}




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
