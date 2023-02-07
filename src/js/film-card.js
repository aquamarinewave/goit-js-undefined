import { noPosterURL } from './library-modal';

export default
function createFilmCardMarkup({id, posterURL = '', title = '', genres = '', year = '', vote = '' }) {
  return `<li class="card" data-filmid="${id}">
        <img src="${posterURL?posterURL:noPosterURL}" alt="${title}" class="card__pic">
        <div class="card__information">
            <p class="card__film-name">${title}</p>
            <div class="card__additional-information">
            <p class="card__gener-item">${genres?genres:'no info'} | <span class="card__release-year">${year?year:'no info'}</span></p>
            <div class="card__rating-background"> 
              <p class="card__rating">${vote}</p>
            </div>
            </div>
        </div>
    </li>`;
}    
