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
};

function toggleModal() {
  let modal = document.getElementById("modal");

  if (modal.classList.contains("modal__target")) {
    document.body.removeChild(modal);
    document.body.classList.toggle("body__modal-opened");

    return;
  }

  document.body.classList.toggle("body__modal-opened");
  modal.classList.toggle("modal__target");

  let altura = document.body.scrollTop;
  modal.style.top = altura;
}
