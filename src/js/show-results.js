import axios from 'axios';

const BASE_URL = 'https://api.themoviedb.org/3/';
const GLOBAL_KEY = 'df88ba4f44a5ed712dd0a71f1b3d877c';

async function getTrendingAPI(page = 1) {
  try {
    const response = await axios.get(
      `${BASE_URL}trending/movie/day?api_key=${GLOBAL_KEY}&page=${page}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

async function getSearchMovieAPI(query, page = 1) {
  try {
    const response = await axios.get(
      `${BASE_URL}search/movie?api_key=${GLOBAL_KEY}&language=en-US&page=${page}&include_adult=false&query=${query}`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

async function getMovieInformationForIdAPI(id) {
  try {
    const response = await axios.get(
      `${BASE_URL}movie/${id}?api_key=${GLOBAL_KEY}&language=en-US`
    );
    return response.data;
  } catch (error) {
    console.log(error);
  }
}

export { getTrendingAPI, getSearchMovieAPI, getMovieInformationForIdAPI };
