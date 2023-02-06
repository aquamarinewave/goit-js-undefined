export default
function createModalMarkup({ id, posterURL = '', title = '', genres = '', year = '',
                            vote = '', votes = '', popularity = '', original = '', overview = '' }) {
  return ` 
    <div class="modal__poster">
      <img class="modal__image" src="${posterURL}" alt="${title}"/>
    </div>
    <div class="modal__information" data-filmid="${id}">
      <h1 class="modal__title">${title}</h1>
      <table class="modal__table">
        <tr class="modal__tr">
          <td class="modal__td">Vote / Votes</td>
          <td class="modal__td-right">
            <span class="modal__vote">${vote}</span>
            / <span class="modal__votes">${votes}</span>
          </td>
        </tr>
        <tr class="modal__tr">
          <td class="modal__td">Popularity</td>
          <td class="modal__td-right modal__popularity">${popularity}</td>
        </tr>
        <tr class="modal__tr">
          <td class="modal__td">Original Title</td>
          <td class="modal__td-right modal__original">${original}</td>
        </tr>
        <tr class="modal__tr">
          <td class="modal__td">Genre</td>
          <td class="modal__td-right modal__genres">${genres}</td>
        </tr>
        <tr class="modal__tr">
          <td class="modal__td">Year</td>
          <td class="modal__td-right modal__year">${year}</td>
        </tr>
      </table>
      <h2 class="modal__description">About</h2>
      <p class="modal__text">${overview}</p>
      <div class="modal__flex">
        <button class="modal__button modal__button--watched js-active" type="button">add to Watched</button>
        <button class="modal__button modal__button--queue js-active" type="button">add to queue</button>
      </div>
    </div> 
  `;
}    



/*
const modalButtonClose = document.querySelector(".modal__button-cls");
const overlay = document.querySelector(".overlay")
    console.log(overlay)

 const modalButtonOpen = document.querySelector(".js-modal-container")
         console.log(modalButtonOpen)

modalButtonClose.addEventListener("click", onModalClose);
modalButtonOpen.addEventListener("click", onModalOpen)
function onModalClose() {
    overlay.classList.add("visually-hidden")

}

export default function onModalOpen() {
    
    overlay.classList.remove('visually-hidden')


}
*/