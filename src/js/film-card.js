import { noPosterURL } from './library-modal';

export default
function createFilmCardMarkup({id, posterURL = '', title = '', genres = '', year = '', vote = '' }) {
  return `<li class="card" data-filmid="${id}">
        <img src="${posterURL?posterURL:noPosterURL}" alt="${title}" class="card__pic">
        <div class="card__information">
            <p class="card__film-name">${title}</p>
            <div class="card__additional-information">
                <ul class="card__gener-list">
                    <li class="card__gener-item">${genres?genres:'no info'}</li>
                </ul>
                <div class="card__vl"></div>
                <p class="card__release-year">${year?year:'no info'}</p>
                <div class="card__rating-background"> 
                  <p class="card__rating">${vote}</p>
                </div>
            </div>
        </div>
    </li>`;
}    
