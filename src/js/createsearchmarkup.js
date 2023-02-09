import createFilmCardMarkup from './film-card';

export { createSearchMarkup };
const POSTER_BASE_URL = 'http://image.tmdb.org/t/p/w500/';

function createSearchMarkup(data) {
  const savedGenres = JSON.parse(localStorage.getItem('allGenres'));
  return data.results
    .map(res =>
      createFilmCardMarkup({
        id: res.id,
        title: res.title,
        posterURL: res.poster_path
          ? `${POSTER_BASE_URL}${res.poster_path}`
          : '',
        genres: `${
          res.genre_ids.length !== 0
            ? res.genre_ids.map(id => savedGenres[id]).join(', ')
            : ''
        }`,
        year: res.release_date ? res.release_date.slice(0, 4) : '',
        vote: res.vote_average ? res.vote_average.toFixed(1) : '0'
      })
    )
    .join('');
}
