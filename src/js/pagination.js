import Pagination from 'tui-pagination';
import sprite from '../images/sprite.svg';
import { fetchHandler } from './main-gallery';
import { getSearchMovieAPI } from './show-results';
import { createSearchMarkup } from './createsearchmarkup';

const paginationEl = document.querySelector('#pagination');
const gallery = document.querySelector(".gallery")
const icon = `${sprite}`;

export const setingsForPagination = {
  typePagination: '',
  searchQuery: '',
};

export const startPagination = ({ page = 1, totalItems }) => {
  const options = {
    page,
    itemsPerPage: 20,
    totalItems,
    visiblePages: 5,
    centerAlign: true,
    usageStatistics: false,
    template: {
      page: '<a href="#" class="tui-page-btn">{{page}}</a>',
      currentPage:
        '<a href="#" class="tui-page-btn tui-is-selected">{{page}}</a>',
      moveButton:
        '<a href="#" class="tui-page-btn tui-{{type}} hide-{{type}}">' +
        `<svg class="tui-ico-{{type}}" width="16" height="16"><use href="${icon}#arrow-{{type}}"></use></svg>` +
        '</a>',
      disabledMoveButton:
        '<span class="tui-page-btn tui-is-disabled tui-{{type}}">' +
        '<span class="tui-ico-{{type}}"></span>' +
        '</span>',
      moreButton:
        '<a href="#" class="tui-page-btn tui-{{type}}-is-ellip change-{{type}}">' +
        '<span class="tui-ico-ellip">...</span>' +
        '</a>',
    },
  };
  const instance = new Pagination(paginationEl, options);
  instance.on('afterMove', async ({ page }) => {
    if (setingsForPagination.typePagination === 'getTrendingAPI') {
      fetchHandler(page);
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    } else if (setingsForPagination.typePagination === 'getSearchMovieAPI') {
      getSearchMovieAPI(setingsForPagination.searchQuery, page).then(
        data => {
          const { page, total_results: totalItems } = data;
          startPagination({ page, totalItems });
          gallery.innerHTML = createSearchMarkup(data);
        }
      );
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: 'smooth',
      });
    }
  });
};
