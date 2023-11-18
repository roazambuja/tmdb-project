function Ranking() {
  this.selected = "movies";
  this.list = [];
  this.cardList = [];

  let movieButton = document.getElementById("movies");
  movieButton.addEventListener("click", async () => await this.changeType("movies"));

  let seriesButton = document.getElementById("series");
  seriesButton.addEventListener("click", async () => await this.changeType("series"));

  let pageTitle = document.getElementById("title");

  this.changeType = async function (type) {
    if (this.selected != type) {
      this.selected = type;

      const element = document.getElementById("cards");
      while (element.firstChild) {
        element.removeChild(element.firstChild);
      }

      await this.renderItens();
    }
  };

  this.renderItens = async function () {
    let message = document.createElement("p");
    let cards = document.getElementById("cards");
    message.classList.add("message");
    cards.appendChild(message);

    try {
      message.innerText = "Carregando informações...";
      this.list = this.selected == "movies" ? await getMovies() : await getSeries();
      pageTitle.innerText = "Top 10 - " + (this.selected == "movies" ? "Filmes" : "Séries");

      this.list.forEach(async (item) => {
        let m = new Movie(
          item.backdrop_path,
          item.id,
          item.overview,
          item.poster_path,
          this.selected == "movies" ? item.release_date : item.first_air_date,
          this.selected == "movies" ? item.title : item.name,
          this.selected == "movies" ? "movies" : "series"
        );
        await m.render();
      });
      cards.removeChild(message);
    } catch (e) {
      message.innerText = "Ocorreu um erro ao carregar os dados.";
    }
  };
}
