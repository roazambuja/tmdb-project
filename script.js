let cards = [];

window.onload = function () {
  cards = document.getElementsByClassName("movie");

  let buttonCloseModal = document.getElementById("modal__close");
  buttonCloseModal.addEventListener("click", toggleModal);

  for (let i = 0; i < cards.length; i++) {
    cards[i].addEventListener("click", toggleModal);
  }
};

function toggleModal() {
  let modal = document.getElementById("demo-modal");
  document.body.classList.toggle("body__modal-opened");
  modal.classList.toggle("modal__target");

  let altura = document.body.scrollTop;
  modal.style.top = altura;
}
