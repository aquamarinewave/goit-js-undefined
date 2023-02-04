import MoviesLibrary from './libraryAPI';

const myLib = {
  watched: new MoviesLibrary('Watched_Test'),
  queue:   new MoviesLibrary('Queue_Test')
}

// myLib.queue.addMovie({id: '5', genres: 'mmmmm'});

const refs = {
  gallery:       document.querySelector('.gallery'),
  //guardDiv:      document.querySelector('.js-guard'),
};

if (Object.values(refs).some(el => !el)) {
  throw new Error('Error: invalid markup!');
}

const page = 1;
const per_page = -1;   // пока без пагинации

function showLibrary(libName) {
  const movies = myLib[libName].getMoviesPage(page, per_page); 

  refs.gallery.insertAdjacentHTML('beforeend', createGalleryMarkup(movies));
}

function createGalleryMarkup(movies) {
  return movies.map(({posterURL, title, genres, year}) => `
    <div class="card">
        <img src="${posterURL}" class="card__pic">
        <div class="card__information">
        <p class="card__film-name">${title}</p>
        <div class="card__additional-information">
            <ul class="card__gener-list">
                <li class="card__gener-item">${genres}</li>
            </ul>
            <div class="card__vl"></div>
            <p class="card__release-year">${year}</p>
        </div>
        </div>
    </div>
  `).join('');
}

// Тестовое наполнение

myLib.watched.clearMovies();
for (let i = 0; i < 20; i += 1) {
  myLib.watched.addMovie({
    id: i+1,
    title: 'ONCE UPON A TIME... IN HOLLYWOOD',
    posterURL: 'https://www.themoviedb.org/t/p/original/pZlSc3Ib8GyhXVfPXUXGEw92Obq.jpg',
    genres: 'Drama, Comedy',
    year: 2019
  });  
}
// ------------------------------

showLibrary('watched');

export default myLib;
