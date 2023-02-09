import axios from 'axios';
import 'animate.css';
import { getTrendingAPI, getMovieInformationForIdAPI } from './show-results';
import { startPagination, setingsForPagination } from './pagination'
import createFilmCardMarkup from './film-card';
import createModalMarkup from './modal-film';
import { openMovieModal } from './library-modal';
import { onSearch } from './search';

const baseImageURL = "https://image.tmdb.org/t/p/w500";

const mainGallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');
const formSearch = document.querySelector('.search__inputbutton');
const gallery = document.querySelector('.gallery__pin')

formSearch.addEventListener('submit', onSearch);

let savedGenres;

async function getGenresAPI() {
  const response = await axios.get(
    `https://api.themoviedb.org/3/genre/movie/list?api_key=df88ba4f44a5ed712dd0a71f1b3d877c&language=en-US`
  );
  savedGenres = Object.fromEntries(
    response.data.genres.map(genre => [genre.id, genre.name])
  );
  localStorage.setItem('allGenres', JSON.stringify(savedGenres));
}

export async function fetchHandler(pages) {
  const { page, total_results: totalItems, results } = await getTrendingAPI(pages);
  startPagination({ page, totalItems });
  setingsForPagination.typePagination = 'getTrendingAPI';

  createFilmCard(results)
  
}

getGenresAPI()
  .then(() => fetchHandler())
  .catch(error => {console.log(error)
    gallery.textContent = 'Sorry, there are no movies to display';
  });
    
loader.hidden = true;
 
function createFilmCard(results) {
  let murkup = results.map(res => 
    createFilmCardMarkup({
      id: res.id,
      title:res.title,
      posterURL: res.poster_path ? `${baseImageURL}${res.poster_path}` : '',
      genres: `${res.genre_ids.map(id => savedGenres[id])
        .join(', ')}`,
      year: res.release_date ? res.release_date.slice(0, 4) : '',
      vote: res.vote_average ? res.vote_average.toFixed(1) : '0'
    }
  )
  ).join('')
  
  mainGallery.innerHTML = murkup;
}
  
// ----------  MODAL  ----------

const modalContent = document.querySelector(".modal__content");

mainGallery.addEventListener("click", onGalleryClick);

function onGalleryClick(evt) {

  evt.preventDefault();
  const filmCard = evt.target.closest(".card");
  if (!filmCard) {
    return;
  }
  const filmId = filmCard.dataset.filmid;

  getMovieInformationForIdAPI(filmId)
    .then(data => {
      const movie = {
        id: data.id,
        title: data.title,
        posterURL: data.poster_path ? `${baseImageURL}${data.poster_path}` : '',
        overview: data.overview,
        genres: data.genres.map(el => el.name).join(', '),
        year: data.release_date ? data.release_date.slice(0, 4) : '',
        vote: data.vote_average ? data.vote_average.toFixed(1) : '0',
        votes: data.vote_count,
        popularity: data.popularity,
        original: data.original_title,
      };

      modalContent.innerHTML = createModalMarkup(movie);

      openMovieModal();
      
    })
    .catch(console.error);
}
