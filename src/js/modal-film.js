// import createFilmCardMarkup from './film-card';

const modalButtonClose = document.querySelector(".modal__button-cls");
const overlay = document.querySelector(".overlay")
    console.log(overlay)

const modalButtonOpen = document.querySelector(".js-modal-container")
        console.log(modalButtonOpen)

modalButtonClose.addEventListener("click", onModalClose);
modalButtonOpen.addEventListener("click", onModalOpen);
document.addEventListener("keydown", onEcsclick);
overlay.addEventListener("click", onBackdropClick);
function onModalClose() {
    overlay.classList.add("visually-hidden")

}

function onModalOpen() {
    
    overlay.classList.remove('visually-hidden')


}

function onEcsclick(e) {
    if (e.key === "Escape") {
        onModalClose();
    } else {
        document.removeEventListener("keydown", this);
    }
} 

function onBackdropClick(e) {
    if (e.currentTarget === e.target) {
        onModalClose();
    } else {
        overlay.removeEventListener("click", this);
    }
}
