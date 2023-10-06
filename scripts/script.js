window.onload = function () {
  let divCards = document.getElementById("cards");
  movies.forEach((movie) => {
    let movieCard = document.createElement("div");
    movieCard.classList.add("movie");
    movieCard.id = movie.id;

    let moviePoster = document.createElement("img");
    moviePoster.classList.add("movie__poster");
    moviePoster.setAttribute(
      "src",
      `https://image.tmdb.org/t/p/original${movie.poster_path}`
    );

    let movieInformations = document.createElement("div");
    movieInformations.classList.add("movie__informations");

    let movieTitle = document.createElement("h2");
    movieTitle.classList.add("movie__title");
    movieTitle.appendChild(document.createTextNode(movie.title));

    let movieData = document.createElement("div");
    movieData.classList.add("movie__data");

    let spanYear = document.createElement("span");
    spanYear.classList.add("movie__year");
    let date = movie.release_date.split("-");
    spanYear.innerText = date[0];

    let spanDuration = document.createElement("span");
    spanDuration.classList.add("movie__duration");

    let spanIcon = document.createElement("span");
    spanIcon.classList.add("material-symbols-outlined");
    spanIcon.classList.add("movie__duration-icon");
    spanIcon.innerText = "schedule";

    spanDuration.appendChild(spanIcon);
    spanDuration.appendChild(document.createTextNode("155min"));
    movieData.appendChild(spanYear);
    movieData.appendChild(spanDuration);

    movieInformations.appendChild(movieTitle);
    movieInformations.appendChild(movieData);

    movieCard.append(moviePoster);
    movieCard.append(movieInformations);
    divCards.append(movieCard);

    movieCard.addEventListener("click", toggleModal);
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
