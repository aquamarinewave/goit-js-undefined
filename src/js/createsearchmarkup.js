export { createSearchMarkup };
const POSTER_BASE_URL = 'http://image.tmdb.org/t/p/w500/';

const savedGenres = JSON.parse(localStorage.getItem('allGenres'));

function createSearchMarkup(data) {
  return data.results
    .map(
      ({ poster_path, original_title, release_date, genre_ids, id }) =>
        `<div class="card" data-filmid="${id}">
          <img class="card__pic" src="${POSTER_BASE_URL}${poster_path}" alt="${original_title}">
          <div class="card__information">
            <p class="card__film-name">${original_title}</p>
            <div class="card__additional-information">
              <p class="card__gener-list">
                ${genre_ids.map(id => savedGenres[id]).join(', ')}
                  <span class="card__vl">
                    |
                  </span>
                  <span class="card__release-year">
                    ${release_date.slice(0, 4)}
                  </span>
              </p>
            </div>
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

// `<div class="card" data-filmid="${id}">
//           <img class="card__pic" src="${POSTER_BASE_URL}${poster_path}" alt="${original_title}">
//           <div class="card__information">
//             <p class="card__film-name">${original_title}</p>
//             <div class="card__additional-information">
//                 <ul class="card__gener-list">
//                     <li class="card__gener-item">${genre_ids.map(
//                       id => savedGenres[id]
//                     )}</li>
//                 </ul>
//                 <div class="card__vl"></div>
//                 <p class="card__release-year">${release_date.slice(0, 4)}</p>
//             </div>
//           </div>
//         </div>`;
