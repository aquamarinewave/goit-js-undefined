import createFilmCardMarkup from './film-card';

export { createSearchMarkup };
const POSTER_BASE_URL = 'http://image.tmdb.org/t/p/w500/';

// const mainGallery = document.querySelector('.gallery');
const savedGenres = JSON.parse(localStorage.getItem('allGenres'));

function createSearchMarkup(data) {
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
        year: res.release_date.slice(0, 4),
        vote: res.vote_average ? res.vote_average.toFixed(1) : '0'
      })
    )
    .join('');

  // mainGallery.innerHTML = murkup;
}

// -- My previous createsearchmarkup.js --
// export { createSearchMarkup };
// const POSTER_BASE_URL = 'http://image.tmdb.org/t/p/w500/';

// const savedGenres = JSON.parse(localStorage.getItem('allGenres'));

// function createSearchMarkup(data) {
//   return data.results
//     .map(
//       ({ poster_path, title, release_date, genre_ids, id }) =>
//         `<li class="movie-card card" data-filmid="${id}">
//           <a href="">
//             <img class="card__pic" src="${
//               poster_path
//                 ? POSTER_BASE_URL
//                 : 'https://dummyimage.com/400x500/dbdbdb/000000.png&text=No+poster'
//             }${poster_path ? poster_path : ''}" alt="${title}">
//           </a>
//           <div class="info-item card__information">
//             <p class="card__film-name">${title}</p>
//             <div class="card__additional-information">
//               <p class="card__gener-list">
//                 ${
//                   genre_ids.length !== 0
//                     ? genre_ids.map(id => savedGenres[id]).join(', ')
//                     : 'Unknown genre'
//                 }
//                   <span class="">
//                     |
//                   </span>
//                   <span class="card__release-year">
//                     ${
//                       release_date
//                         ? release_date.slice(0, 4)
//                         : 'Unknown release date'
//                     }
//                   </span>
//               </p>
//             </div>
//           </div>
//         </li>`
//     )
//     .join('');
// }

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
