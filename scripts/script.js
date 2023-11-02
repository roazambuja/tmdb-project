const TOKEN = "API_TOKEN_HERE";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: `Bearer ${TOKEN}`,
  },
};

const api = "https://api.themoviedb.org/3";

function getMovies() {
  return fetch(`${api}/trending/movie/week?language=pt-BR`, options)
    .then((response) => response.json())
    .then((response) => response.results.slice(0, 10))
    .catch((err) => console.error(err));
}

function getSeries() {
  return fetch(`${api}/trending/tv/week?language=pt-BR`, options)
    .then((response) => response.json())
    .then((response) => response.results.slice(0, 10))
    .catch((err) => console.error(err));
}

function getMovieCrew(id) {
  return fetch(`${api}/movie/${id}/credits?language=pt-BR`, options)
    .then((response) => response.json())
    .then((response) => response.crew)
    .catch((err) => console.error(err));
}

function getMovieDetails(id) {
  return fetch(`${api}/movie/${id}?language=pt-BR`, options)
    .then((response) => response.json())
    .catch((err) => console.error(err));
}

function getSerieDetails(id) {
  return fetch(`${api}/tv/${id}?language=pt-BR`, options)
    .then((response) => response.json())
    .catch((err) => console.error(err));
}

let ranking = new Ranking();
ranking.renderItens();
