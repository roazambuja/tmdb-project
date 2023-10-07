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
