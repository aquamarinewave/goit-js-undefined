import myLibs from './library-service';

let refsM;
let handlerAfterClose;

export function openMovieModal(onAfterClose = null) {
  refsM = {
    overlay: document.querySelector('.overlay'),
    btnModalClose: document.querySelector(".modal__button-cls"),
    btnWatched: document.querySelector('.modal__button--watched'),
    btnQueue: document.querySelector('.modal__button--queue'),
    infoId: document.querySelector('.modal__information'),
    title: document.querySelector('.modal__title'),
    poster: document.querySelector('.modal__image'),
    genres: document.querySelector('.modal__genres'),
    year: document.querySelector('.modal__year'),
    vote: document.querySelector('.modal__vote'),
    votes: document.querySelector('.modal__votes'),
    popularity: document.querySelector('.modal__popularity'),
    original: document.querySelector('.modal__original'),
    overview: document.querySelector('.modal__text'),
  };

  if (Object.values(refsM).some(el => !el)) {
    console.error('Error: invalid markup of modal window!');
  }

  handlerAfterClose = onAfterClose;

  refsM.btnModalClose.addEventListener("click", onModalClose);
  refsM.overlay.addEventListener("click", onBackdropClick);
  document.addEventListener('keydown', onKeyDown);

  refsM.btnWatched.addEventListener('click', onModalLibraryClick.bind(null, "watched"));
  refsM.btnQueue.addEventListener('click', onModalLibraryClick.bind(null, "queue"));
  
  refreshBtns();

  refsM.overlay.classList.remove('visually-hidden');
  document.body.classList.add("modal__is-open");

  return refsM;
}

function getModalFilmId() {
  return refsM.infoId.dataset.filmid;
}

function onModalLibraryClick(libName) {
  const movieId = getModalFilmId(); 

  if (!movieId) {
    return;
  }

  if (myLibs[libName].getMovieById(movieId)) {
    myLibs[libName].removeMovie(movieId);
  } else {
    myLibs[libName].addMovie(getMovieModal());
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
  return {
    id: getModalFilmId(),
    title: refsM.title.textContent,
    posterURL: refsM.poster.src,
    overview: refsM.overview.textContent,
    genres: refsM.genres.textContent,
    year: refsM.year.textContent,
    vote: refsM.vote.textContent,
    votes: refsM.votes.textContent,
    popularity: refsM.popularity.textContent,
    original: refsM.original.textContent,
  };
}

function onModalClose() {
  refsM.overlay.classList.add("visually-hidden");
  document.body.classList.remove("modal__is-open");
  
  if (handlerAfterClose) { 
    handlerAfterClose();
  }
}

function onKeyDown(evt) {
    if (evt.key === "Escape") {
        onModalClose();
        document.removeEventListener("keydown", onKeyDown);
    }
} 

function onBackdropClick(evt) {
    if (evt.currentTarget === evt.target) {
        onModalClose();
        refsM.overlay.removeEventListener("click", onBackdropClick);
    }
}
