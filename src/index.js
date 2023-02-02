import {
  getTrendingAPI,
  getSearchMovieAPI,
  getMovieInformationForIdAPI,
} from './js/show-results';

getTrendingAPI().then(data => console.log(data));
getSearchMovieAPI('cat').then(data => console.log(data));
getMovieInformationForIdAPI(454646).then(data => console.log(data));
