export { onSearch };
import { createSearchMarkup } from './createsearchmarkup';
import { getSearchMovieAPI } from './show-results';
import Notiflix from 'notiflix';
import { setingsForPagination, startPagination } from './pagination';
const gallery = document.querySelector('.gallery');

function onSearch(e) {
  e.preventDefault();
  let query = e.currentTarget.elements[0].value.trim().toLowerCase();

  getSearchMovieAPI(query)
    .then(data => {
      if (data.results.length === 0) {
        Notiflix.Notify.failure(
          'Search result not successful. Enter the correct movie name and retry.'
        );
        return;
      } else {
        const { page, total_results: totalItems } = data;
        startPagination({ page, totalItems });
        setingsForPagination.typePagination = 'getSearchMovieAPI';
        setingsForPagination.searchQuery = query;
        gallery.innerHTML = createSearchMarkup(data);
      }
    })
    .catch(err => console.log(err));
  e.currentTarget.reset();
}
