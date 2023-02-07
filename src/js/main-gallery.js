import axios from 'axios';
import { getTrendingAPI, getMovieInformationForIdAPI } from './show-results';
import { startPagination, setingsForPagination } from './pagination'
import { getTrendingAPI, BASE_URL, GLOBAL_KEY } from './show-results';
import createFilmCardMarkup from './film-card';
import createModalMarkup from './modal-film';
import { openMovieModal } from './library-modal';

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



export async function fetchHandler(pages) {
  const { page, total_results: totalItems, results } = await getTrendingAPI(pages);
  startPagination({ page, totalItems });
  setingsForPagination.typePagination = 'getTrendingAPI';


  
  
  createFilmCard(results)
  
  
}
fetchHandler()
//console.log(data.results)
function createFilmCard(results) {
const imageURL = "https://image.tmdb.org/t/p/w500";
  let murkup = results.map(res => 
    createFilmCardMarkup({
      id: res.id,
      title:res.title,
      posterURL: `${imageURL}${res.poster_path}`,
      genres: `${res.genre_ids.map(id => savedGenres[id])
        .join(', ')}`,
      year: res.release_date.slice(0, 4)
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

      const imageURL = "https://image.tmdb.org/t/p/w500";
      const movie = {
        id: data.id,
        title: data.title,
        posterURL: `${data.poster_path ? imageURL : 'https://dummyimage.com/400x500/dbdbdb/000000.png&text=No+poster'}
                    ${data.poster_path ? data.poster_path : ''}`,
        overview: data.overview,
        genres: data.genres.map(el => el.name).join(', '),
        year: data.release_date.slice(0, 4),
        vote: data.vote_average,
        votes: data.vote_count,
        popularity: data.popularity,
        original: data.original_title,
      };

      modalContent.innerHTML = createModalMarkup(movie);

      openMovieModal();
      
    })
    .catch(console.error);
}
