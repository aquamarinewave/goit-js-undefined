import axios from 'axios'; 
import { getTrendingAPI } from './show-results'; 
import {startPagination, setingsForPagination} from './pagination'
import {getTrendingAPI, BASE_URL, GLOBAL_KEY } from './show-results'; 
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
   let markup = data.map(({ poster_path, title, release_date, genre_ids }) => 
     `<li class="movie-card"> 
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
  const { page, total_results: totalItems, results } = await getTrendingAPI(pages);
  startPagination({ page, totalItems });
  setingsForPagination.typePagination = 'getTrendingAPI';
  rederMainPage(results); 
} 
 
fetchHandler()

