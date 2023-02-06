import myLibs from './library-service';
import createFilmCardMarkup from './film-card';

let myLib = myLibs.watched;

let page = 1;
const per_page = 6;   // !?! установить коррект

const refs = {
  gallery:    document.querySelector('.gallery'),
  btnWatched: document.querySelector('#btn-watched'),
  btnQueue:   document.querySelector('#btn-queue'),
};

if (Object.values(refs).some(el => !el)) {
  throw new Error('Invalid markup!');
}

refs.gallery.insertAdjacentHTML('afterend', `<div class="js-guard"></div>`); 
refs.guardDiv = document.querySelector('.js-guard');

// Modal code
// refs.gallery.addEventListener("click", onIdSearch);
// function onIdSearch(e) {
//   console.log(e)
//     const filmCard = e.target.closest(".card");
//   const filmId = filmCard.dataset.filmid;
// movie = myLib.getMovieById(filmId);
// }
// !?! Тестовая разметка - удалить при деплое, заменить на реал

refs.gallery.insertAdjacentHTML('beforebegin', `<button type="button" id="btn-watched" class="btn-library is-active">Watched</button>`); 
refs.gallery.insertAdjacentHTML('beforebegin', `<button type="button" id="btn-queue" class="btn-library">Queue</button>`); 

refs.btnWatched = document.querySelector('#btn-watched');
refs.btnQueue = document.querySelector('#btn-queue');

// -----------------------------------

refs.btnWatched.addEventListener('click', onBtnLibraryClick);
refs.btnQueue.addEventListener('click', onBtnLibraryClick);

function onBtnLibraryClick(evt) {
  const curBtn = evt.currentTarget;
  if (((curBtn === refs.btnWatched) && (myLib === myLibs.watched)) ||
      ((curBtn === refs.btnQueue) && (myLib === myLibs.queue))) {
    return;
  }

  page = 1;

  if (curBtn === refs.btnWatched) {
    myLib = myLibs.watched;
    refs.btnWatched.classList.add('is-active');
    refs.btnQueue.classList.remove('is-active');
  } else if (curBtn === refs.btnQueue) {
    myLib = myLibs.queue;
    refs.btnWatched.classList.remove('is-active');
    refs.btnQueue.classList.add('is-active');
  }

  myLib.refreshMovies();
  showLibrary();
}

const observerOpts = {
  root: null,
  rootMargin: '300px',
  threshold: 1.0
}

const onObserve = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (page < myLib.getCountPages(per_page)) {
        page += 1;
        showLibrary();  
      }
    }
  });
}

const observer = new IntersectionObserver(onObserve, observerOpts);

function showLibrary() {

  if ((page === 1) && (myLib.getCount() > 0)) {
    refs.gallery.innerHTML = '';
  }

  const movies = myLib.getMoviesPage(page, per_page); 

  refs.gallery.insertAdjacentHTML('beforeend', createGalleryMarkup(movies));

  if ((page === 1) && (myLib.getCountPages(per_page) > 1)) {
    observer.observe(refs.guardDiv);
  } else if (page === myLib.getCountPages(per_page)) {
    observer.unobserve(refs.guardDiv);
  }
}

function createGalleryMarkup(movies) {
  return movies.map(movie => createFilmCardMarkup(movie)).join('');
}

showLibrary();

// ---------  LIBRARY IN MODAL  -----------

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

  page = 1;
  showLibrary();

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
