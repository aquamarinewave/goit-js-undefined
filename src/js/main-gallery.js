import axios from 'axios'; 
import { getTrendingAPI, getMovieInformationForIdAPI } from './show-results'; 
import {startPagination, setingsForPagination} from './pagination'
import {getTrendingAPI, BASE_URL, GLOBAL_KEY } from './show-results'; 

import createModalMarkup from './modal-film';
import { initModal } from './library-modal';

const mainGallery = document.querySelector(".gallery"); 
 
async function getGenresAPI() {
  const response = await axios.get(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=df88ba4f44a5ed712dd0a71f1b3d877c&language=en-US`
  );
  const savedGenres = Object.fromEntries(
    response.data.genres.map(genre => [genre.id, genre.name])
  );
  localStorage.setItem('allGenres', JSON.stringify(savedGenres));
  
}
  getGenresAPI()
 const savedGenres = JSON.parse(localStorage.getItem('allGenres'));

 function rederMainPage(data) { 
  const imageURL = "https://image.tmdb.org/t/p/w500"; 
   let markup = data.results.map(({ id, poster_path, title, release_date, genre_ids }) => 
     `<li class="movie-card card" data-filmId="${id}"> 
     <a  href=''><img src=${imageURL}${poster_path} alt=${title} loading="lazy" height=574px width=395px /></a> 
    <p class="info-item"> 
      <b> ${title}</b> 
    </p> 
    <p class="card__additional-information"> 
        ${genre_ids.map(id => savedGenres[id])
          .join(', ') 
          } | ${release_date.slice(0, 4)} 
        </p> 
     </li> 
     
    ` 
    ) 
    .join(''); 
 
  mainGallery.innerHTML = markup; 
} 
 
export async function fetchHandler(pages) { 
  const { page, total_results: totalItems } = await getTrendingAPI(pages);
  startPagination({ page, totalItems });
  setingsForPagination.typePagination = 'getTrendingAPI';
  getTrendingAPI(pages).then(results => rederMainPage(results)); 
} 
 
fetchHandler()

// ----------  MODAL  ----------

  //  let markup = data.results.map(({ id, poster_path, title, release_date, genre_ids }) => 
  //    `<li class="movie-card card" data-filmId="${id}"> 

const refs = {
  gallery:    document.querySelector('.gallery'),
  overlay: document.querySelector('.overlay'),
  btnModalClose: document.querySelector(".modal__button-cls"),
  modalContent: document.querySelector(".modal__content"),
};

if (Object.values(refs).some(el => !el)) {
  console.error('Error: invalid markup!');
}

refs.btnModalClose.addEventListener("click", onModalClose);
refs.gallery.addEventListener("click", onGalleryClick);

function onGalleryClick(evt) {

  evt.preventDefault(); 

  const filmCard = evt.target.closest(".card");
  if (!filmCard) {
    return;  
  }
  const filmId = filmCard.dataset.filmid;

  getMovieInformationForIdAPI(filmId)
    .then(data => {
      const imageURL = "https://image.tmdb.org/t/p/w500";
      const movie = {
        id: data.id,
        title: data.title,
        posterURL: `${imageURL}${data.poster_path}`,
        overview: data.overview,
        genres: data.genres.map(el => el.name).join(', '),
        year: data.release_date.slice(0, 4),
        vote: data.vote_average,
        votes: data.vote_count,
        popularity: data.popularity,
        original: data.original_title,
      };

      refs.modalContent.innerHTML = createModalMarkup(movie);

      initModal();

      refs.overlay.classList.remove('visually-hidden');

    })
    .catch(console.error);
}

function onModalClose() {
  refs.overlay.classList.add("visually-hidden");
}

// ----------  END OF MODAL  ----------
