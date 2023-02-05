import axios from 'axios'; 
//import { getTrendingAPI } from './show-results'; 
import {getTrendingAPI, BASE_URL, GLOBAL_KEY } from './show-results'; 
const mainGallery = document.querySelector(".gallery"); 
 
const savedGenres = JSON.parse(localStorage.getItem('allGenres')); 
 function rederMainPage(data) { 
  const imageURL = "https://image.tmdb.org/t/p/w500"; 
   let markup = data.results.map(({ poster_path, title, release_date, genre_ids }) => 
     `<li class="movie-card"> 
     <a  href=''><img src=${imageURL}${poster_path} alt=${title} loading="lazy" height=574px width=395px /></a> 
    <p class="info-item"> 
      <b> ${title}</b> 
    </p> 
    <p class="card__additional-information"> 
        ${genre_ids 
          } | ${release_date.slice(0, 4)} 
        </p> 
     </li> 
     
    ` 
    ) 
    .join(''); 
 
  mainGallery.innerHTML = markup; 
} 
 
async function fetchHandler() { 
  getTrendingAPI().then(results => rederMainPage(results)); 
} 
 
fetchHandler()