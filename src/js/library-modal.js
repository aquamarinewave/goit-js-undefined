import myLibs from './library-service';

const refsM = {
  btnWatched: document.querySelector('.modal__button--watched'),
  btnQueue:   document.querySelector('.modal__button--queue'),
  infoId:     document.querySelector('.modal__information'),
  title:      document.querySelector('.modal__title'),
  poster:     document.querySelector('.modal__image'),
  overview:   document.querySelector('.modal__text'),
};

if (Object.values(refsM).some(el => !el)) {
  throw new Error('Invalid markup of modal window!');
}

refsM.btnWatched.addEventListener('click', onModalLibraryClick.bind(null, "watched"));
refsM.btnQueue.addEventListener('click', onModalLibraryClick.bind(null, "queue"));

function getModalFilmId() {
  //return refsM.infoId.dataset.filmid;
  return '5';   // !?! - заглушка, убрать
}

function onModalLibraryClick(libName) {
  const movieId = getModalFilmId();

  if (!movieId) {
    return;
  }

  if (myLibs[libName].getMovieById(movieId)) {
    myLibs[libName].removeMovie(movieId);
  } else {
    const movie = getMovieModal();
    myLibs[libName].addMovie(movie);
  }
  refreshBtns();
}

function refreshBtns() {
  const movieId = getModalFilmId();

  if (!movieId) {
    return;
  }

  if (myLibs.watched.getMovieById(movieId)) {
    refsM.btnWatched.textContent = 'REMOVE FROM WATCHED';
    refsM.btnWatched.classList.remove("js-active");
  } else {
    refsM.btnWatched.textContent = 'ADD TO WATCHED';
    refsM.btnWatched.classList.add("js-active");
  }

  if (myLibs.queue.getMovieById(movieId)) {
    refsM.btnQueue.textContent = 'REMOVE FROM QUEUE';
    refsM.btnQueue.classList.remove("js-active");
  } else {
    refsM.btnQueue.textContent = 'ADD TO QUEUE';
    refsM.btnQueue.classList.add("js-active");
  }
}

function getMovieModal() {
  const movie = {
    id: getModalFilmId(),
    title: refsM.title.textContent,
    posterURL: refsM.poster.src,
    overview: refsM.overview.textContent,
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
