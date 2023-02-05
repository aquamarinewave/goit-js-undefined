export { createSearchMarkup };
const POSTER_BASE_URL = 'http://image.tmdb.org/t/p/w500/';

const savedGenres = JSON.parse(localStorage.getItem('allGenres'));

function createSearchMarkup(data) {
  return data.results
    .map(
      ({ poster_path, original_title, release_date, genre_ids }) =>
        `<div class="card">
        <img class="card__pic" src="${POSTER_BASE_URL}${poster_path}" alt="${original_title}">
        <div class="card__information">
        <p class="card__film-name">
        ${original_title}
        </p>
        <p class="card__additional-information">
        ${genre_ids
          .map(id => savedGenres[id])
          .join(', ')} | ${release_date.slice(0, 4)}
        </p>
        </div>
        </div>`
    )
    .join('');
}

// console.log(savedGenres);

// const genresIds = [12, 18];
// const genres = [];
// for (let i = 0; i < genresIds.length; i += 1) {
//   genres.push(savedGenres[genresIds[i]]);
// }
// console.log(genres.join(', '));
