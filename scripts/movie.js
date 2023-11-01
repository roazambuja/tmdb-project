function Movie(backdrop, genres_id, id, overview, poster, releaseDate, title) {
  this.backdrop = backdrop;
  this.genres = [];
  this.id = id;
  this.overview = overview;
  this.poster = poster;

  let date = releaseDate.split("-");
  this.releaseYear = date[0];

  this.title = title;

  genres_id.forEach((id) => {
    genres.forEach((genre) => {
      if (genre.id == id && this.genres.length < 3) {
        this.genres.push(genre.name);
      }
    });
  });

  this.card = undefined;

  this.render = function () {
    let divCards = document.getElementById("cards");

    this.card = document.createElement("div");
    this.card.classList.add("movie");
    this.card.id = this.id;

    let moviePoster = document.createElement("img");
    moviePoster.classList.add("movie__poster");
    moviePoster.setAttribute("src", `https://image.tmdb.org/t/p/original${this.poster}`);

    let movieInformations = document.createElement("div");
    movieInformations.classList.add("movie__informations");

    let movieTitle = document.createElement("h2");
    movieTitle.classList.add("movie__title");
    movieTitle.appendChild(document.createTextNode(this.title));

    let movieData = document.createElement("div");
    movieData.classList.add("movie__data");

    let spanYear = document.createElement("span");
    spanYear.classList.add("movie__year");
    spanYear.innerText = this.releaseYear;

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

    this.card.append(moviePoster);
    this.card.append(movieInformations);
    divCards.append(this.card);

    this.card.addEventListener("click", this.handleClick);
  };

  this.handleClick = () => {
    const modal = new Modal(this);
    modal.render();
  };

  this.getDirector = async function () {
    let crewList = await getMovieCrew(this.id);
    crewList.map((crew) => {
      if (crew.job == "Director") {
        this.directorName = crew.name;
      }
    });
  };

  this.getDirector();
}
