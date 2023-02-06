export { onSearch };
import { createSearchMarkup } from './createsearchmarkup';
import { getSearchMovieAPI } from './show-results';
import Notiflix from 'notiflix';
import { setingsForPagination, startPagination } from './pagination';
// import { gallery } from '../index';
const gallery = document.querySelector('.gallery');

function onSearch(e) {
  e.preventDefault();
  let query = e.currentTarget.elements[0].value.trim().toLowerCase();

  setingsForPagination.searchQuery = query;
  setingsForPagination.typePagination = 'getSearchMovieAPI';

  getSearchMovieAPI(query)
    .then(data => {
      if (data.results.length === 0) {
        Notiflix.Notify.failure(
          'Search result not successful. Enter the correct movie name and retry.'
        );
      } else {
        const { page, total_results: totalItems } = data;
        startPagination({ page, totalItems });
        // console.log(data.results);
        gallery.innerHTML = createSearchMarkup(data);
      }
    })
    .catch(err => console.log(err));
  e.currentTarget.reset();
}
