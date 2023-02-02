export { onSearch };
import { getSearchMovieAPI } from './show-results';
import Notiflix from 'notiflix';

function onSearch(e) {
  e.preventDefault();
  query = e.currentTarget.elements[0].value.trim().toLowerCase();
  let page = 1;

  getSearchMovieAPI(query, page)
    .then(data => {
      if (data.results.length === 0) {
        Notiflix.Notify.failure(
          'Search result not successful. Enter the correct movie name and retry.'
        );
      } else {
        // console.log(data.results);
        gallery.innerHTML = createMarkup(data);
      }
    })
    .catch(err => console.log(err));
}
