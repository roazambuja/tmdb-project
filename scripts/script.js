window.onload = function () {
  movies.forEach((movie) => {
    let m = new Movie(
      movie.backdrop_path,
      movie.genre_ids,
      movie.id,
      movie.overview,
      movie.poster_path,
      movie.release_date,
      movie.title
    );
    m.render();
  });

  let buttonCloseModal = document.getElementById("modal__close");
  buttonCloseModal.addEventListener("click", toggleModal);
};

function toggleModal() {
  let modal = document.getElementById("demo-modal");
  document.body.classList.toggle("body__modal-opened");
  modal.classList.toggle("modal__target");

  let altura = document.body.scrollTop;
  modal.style.top = altura;
}
