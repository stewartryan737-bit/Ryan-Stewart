let isModalOpen = false;
let contrastToggle = false;

function toggleContrast() {
  contrastToggle = !contrastToggle;
  if (contrastToggle) {
    document.body.classList += " dark-theme";
  } else {
    document.body.classList.remove("dark-theme");
  }
}

function contact(event) {
  event.preventDefault();
  const loading = document.querySelector('.modal__overlay--loading');
  const success = document.querySelector('.modal__overlay--success');
  loading.classList.add('modal__overlay--visible');
  emailjs
    .sendForm(
      "service_m004u3n",
      "template_tpcg7qi",
      event.target,
      "qdgmN2q9T0G5ELbWg",
    )
    .then(() => {
      loading.classList.remove('modal__overlay--visible');
      success.classList.add('modal__overlay--visible');
    })
    .catch((error) => {
      loading.classList.remove('modal__overlay--visible');
      alert(
        "The email service is temporarily unavailable. Please contact me directly at stewartryan737@gmail.com",
      );
    });
}

function toggleModal() {
 if (isModalOpen) {
    isModalOpen = false;
    return  document.body.classList.remove('modal--open');
  }
  isModalOpen = true;
  document.body.classList += " modal--open";
}
