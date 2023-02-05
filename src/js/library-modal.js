import myLibs from './library-service';

const refs = {
  btnWatched: document.querySelector('.modal__button--watched'),
  btnQueue:   document.querySelector('.modal__button--queue'),
  infoId:     document.querySelector('.modal__information'),
  title:      document.querySelector('.modal__title'),
  poster:     document.querySelector('.modal__image'),
  overview:   document.querySelector('.modal__text'),
};

if (Object.values(refs).some(el => !el)) {
  throw new Error('Invalid markup!');
}

refs.btnWatched.addEventListener('click', onBtnLibraryClick.bind(null, "watched"));
refs.btnQueue.addEventListener('click', onBtnLibraryClick.bind(null, "queue"));

const movieId = refs.infoId.dataset.filmid;

if (!movieId) {
  throw new Error('Invalid markup - missed attribute data-filmid!');
}

function onBtnLibraryClick(libName) {
  const myLib = myLibs[libName];
  if (myLib.getMovieById(movieId)) {
    myLib.removeMovie(movieId);
  } else {
    const movie = getMovieModal();
    myLib.addMovie(movie);
  }
  refreshBtns();
}

function refreshBtns() {
  if (myLibs.watched.getMovieById(movieId)) {
    refs.btnWatched.textContent = 'REMOVE FROM WATCHED';
    refs.btnWatched.classList.add("active");
  } else {
    refs.btnWatched.textContent = 'ADD TO WATCHED';
    refs.btnWatched.classList.remove("active");
  }

  if (myLibs.queue.getMovieById(movieId)) {
    refs.btnQueue.textContent = 'REMOVE FROM QUEUE';
    refs.btnQueue.classList.add("active");
  } else {
    refs.btnQueue.textContent = 'ADD TO QUEUE';
    refs.btnQueue.classList.remove("active");
  }
}

function getMovieModal() {
  const movie = {
    id: movieId,
    title: refs.title.textContent,
    posterURL: refs.poster.src,
    overview: refs.overview.textContent,
    /* !?! - доделать когда будет разметка
    genres: 'Drama, Comedy',
    year: 2022,
    vote: '5.7',
    votes: '1234',
    popularity: '100.2',
    original: `Avatar: The Way of Water`,
    */
  };

  return movie;
}

refreshBtns();