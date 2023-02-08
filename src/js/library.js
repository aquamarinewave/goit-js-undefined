import myLibs from './library-service';
import createFilmCardMarkup from './film-card';
import createModalMarkup from './modal-film';

import { openMovieModal } from './library-modal';

let myLib = myLibs.watched;

let page = 1;
const per_page = 9;   
let prevCount;

const refs = {
  gallery: document.querySelector('.gallery'),
  btnWatched: document.querySelector('#btn-watched'),
  btnQueue: document.querySelector('#btn-queue'),
  modalContent: document.querySelector(".modal__content"),
};

if (Object.values(refs).some(el => !el)) {
  console.error('Error: invalid markup!');
}

refs.gallery.insertAdjacentHTML('afterend', `<div class="js-guard"></div>`);
refs.guardDiv = document.querySelector('.js-guard');

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
  threshold: 1.0,
};

const onObserve = (entries, observer) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      if (page < myLib.getCountPages(per_page)) {
        page += 1;
        showLibrary();
      }
    }
  });
};

const observer = new IntersectionObserver(onObserve, observerOpts);

function showLibrary() {

  if (page === 1) {   
    if (myLib.getCount() > 0) {
      refs.gallery.innerHTML = '';
    } else {  
      refs.gallery.innerHTML = `<li class="gallery__pin">The library is empty</li>`;
    } 
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

// ----------  MODAL  ----------

refs.gallery.addEventListener("click", onGalleryClick);

function onGalleryClick(evt) {

  evt.preventDefault();

  const filmCard = evt.target.closest('.card');
  if (!filmCard) {
    return;
  }
  const filmId = filmCard.dataset.filmid;

  const movie = myLib.getMovieById(filmId);
  if (!movie) {
    console.error(`Movie with id = ${filmId} isn't found in library!`);
    return;
  }

  prevCount = myLib.getCount();

  refs.modalContent.innerHTML = createModalMarkup(movie);

  openMovieModal(onAfterModalClose);
}

function onAfterModalClose() { 
  if (myLib.getCount() !== prevCount) {
    page = 1;
    showLibrary();
    prevCount = myLib.getCount();
  }
}
