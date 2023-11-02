function Ranking() {
  this.selected = "movies";

  let movieButton = document.getElementById("movies");
  movieButton.addEventListener("click", () => this.changeType("movies"));

  let seriesButton = document.getElementById("series");
  seriesButton.addEventListener("click", () => this.changeType("series"));

  let pageTitle = document.getElementById("title");

  this.changeType = function (type) {
    if (this.selected != type) {
      this.selected = type;

      const element = document.getElementById("cards");
      while (element.firstChild) {
        element.removeChild(element.firstChild);
      }

      this.renderItens();
    }
  };

  this.renderItens = async function () {
    let list = this.selected == "movies" ? await getMovies() : await getSeries();
    pageTitle.innerText = "Top 10 - " + (this.selected == "movies" ? "Filmes" : "Séries");

    list.forEach((item) => {
      let i = new Movie(
        item.backdrop_path,
        item.id,
        item.overview,
        item.poster_path,
        this.selected == "movies" ? item.release_date : item.first_air_date,
        this.selected == "movies" ? item.title : item.name,
        this.selected == "movies" ? "movies" : "series"
      );
      i.render();
    });
  };
}
