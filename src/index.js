import { onSearch } from './js/search';
import { getGenresAPI } from './js/getgenresapi';
const form = document.querySelector('.search__inputbutton');
getGenresAPI();
form.addEventListener('submit', onSearch);
