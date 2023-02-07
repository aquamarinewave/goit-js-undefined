export default function createFilmCardMarkup({
  id,
  posterURL = '',
  title = '',
  genres = 'no info',
  year = 'no info',
  votes = '',
}) {
  return `
    <div class="card" data-filmid="${id}">
        <img src="${posterURL}" alt="${title}" class="card__pic">
        <div class="card__information">
            <p class="card__film-name">${title}</p>
            <div class="card__additional-information">
                <ul class="card__gener-list">
                    <li class="card__gener-item">${genres}</li>
                </ul>
                <div class="card__vl"></div>
                <p class="card__release-year">${year}</p>
            </div>
        </div>
    </div>
  `;
}
