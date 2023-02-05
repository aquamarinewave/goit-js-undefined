import axios from 'axios';
//import { getTrendingAPI } from './show-results';
import {getTrendingAPI, BASE_URL, GLOBAL_KEY } from './show-results';
const mainGallery = document.querySelector(".gallery");


async function getGenresAPI() {
  const response = await axios.get(
    `${BASE_URL}genre/movie/list?api_key=${GLOBAL_KEY}&language=en-US`
  );
  const savedGenres = Object.fromEntries(
    response.data.genres.map(genre => [genre.id, genre.name])
  );
  localStorage.setItem('allGenres', JSON.stringify(savedGenres));
  console.log(savedGenres);
  
}
const savedGenres = JSON.parse(localStorage.getItem('allGenres'));
 function rederMainPage(data) {
  const imageURL = `https://image.tmdb.org/t/p/w500`;
   let markup = data.results.map(({ poster_path, title, release_date, genre_ids }) =>
     `
     <li class="movie-card">
     <a  href=''><img src=${imageURL}${poster_path} alt=${title} loading="lazy" height=574px width=395px /></a>
    <p class="info-item">
      <b> ${title}</b>
    </p>
    
     </li>
    
    `
   ).join("");
    
  mainGallery.innerHTML = markup;
   
}

async function fetchHandler() {
  getTrendingAPI()
.then(results=>rederMainPage(results))
}

fetchHandler()