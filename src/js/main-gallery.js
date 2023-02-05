import axios from 'axios';
//import { getTrendingAPI } from './show-results';
import { getTrendingAPI, BASE_URL, GLOBAL_KEY } from './show-results';
const mainGallery = document.querySelector(".gallery");

//function mainPageTrendingMovie() {
//    const GLOBAL_KEY = 'df88ba4f44a5ed712dd0a71f1b3d877c';
//   const APItrending = `https://api.themoviedb.org/3/trending/movie/week?api_key=5d369441bd67a61471936fd86df9d048`;

//    return axios.get(APItrending);
//rederMainPage(resalts)
//}

// console.log(getTrendingAPI)
 function rederMainPage(data) {
  const imageURL = `https://image.tmdb.org/t/p/w500`;
  let markup = data.results
    .map(
      ({ poster_path, title }) =>
        `
     <li class="movie-card">
     <a  href=''><img src=${imageURL}${poster_path} alt=${title} loading="lazy" height=574px width=395px /></a>
    <p class="info-item">
      <b> ${title}</b>
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

fetchHandler();
