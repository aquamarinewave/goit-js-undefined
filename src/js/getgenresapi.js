/*import axios from 'axios';
import { BASE_URL, GLOBAL_KEY } from './show-results';
export { getGenresAPI };
// export { savedGenres };

async function getGenresAPI() {
  const response = await axios.get(
    `${BASE_URL}genre/movie/list?api_key=${GLOBAL_KEY}&language=en-US`
  );
  const savedGenres = Object.fromEntries(
    response.data.genres.map(genre => [genre.id, genre.name])
  );
  localStorage.setItem('allGenres', JSON.stringify(savedGenres));
  // console.log(savedGenres);
  // return savedGenres;
}
*/