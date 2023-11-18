function Movie(backdrop, id, overview, poster, releaseDate, title, type) {
  this.backdrop = backdrop;
  this.genres = [];
  this.id = id;
  this.overview = overview;
  this.poster = poster;
  this.title = title;
  this.card = undefined;
  this.type = type;

  let date = releaseDate.split("-");
  this.releaseYear = date[0];

  this.getDetails = async function () {
    if (this.type == "movies") {
      let { runtime, genres } = await getMovieDetails(this.id);
      this.runtime = runtime;
      this.getGenreNames(genres);
    } else if (this.type == "series") {
      let { genres, number_of_episodes } = await getSerieDetails(this.id);
      this.runtime = number_of_episodes;
      this.getGenreNames(genres);
    }
  };

  this.getGenreNames = function (genres) {
    genres.forEach((genre) => {
      if (this.genres.length < 3) {
        this.genres.push(genre.name);
      }
    });
  };

  this.render = async function () {
    this.type == "movies" && (await this.getDirector());

    let divCards = document.getElementById("cards");

    this.card = document.createElement("div");
    this.card.classList.add("movie");
    this.card.id = this.id;

    let moviePoster = document.createElement("img");
    moviePoster.classList.add("movie__poster");
    moviePoster.setAttribute("src", `https://image.tmdb.org/t/p/original${this.poster}`);

    let movieInformations = document.createElement("div");
    movieInformations.classList.add("movie__informations");

    let formatedTitle = this.title;
    if (this.title.length > 40) {
      formatedTitle =
        formatedTitle.charAt(39) == " " ? this.title.substring(0, 39) : this.title.substring(0, 40);
      formatedTitle += "...";
    }

    let movieTitle = document.createElement("h2");
    movieTitle.classList.add("movie__title");
    movieTitle.appendChild(document.createTextNode(formatedTitle));
    this.title.length > 40 && (movieTitle.style.fontSize = 16);

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

    await this.getDetails();

    spanDuration.appendChild(spanIcon);
    spanDuration.appendChild(
      document.createTextNode(this.runtime + (this.type == "movies" ? "min" : " EPs"))
    );
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
}
