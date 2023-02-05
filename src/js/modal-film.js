const modalButtonClose = document.querySelector(".modal__button-cls");
const overlay = document.querySelector(".overlay")
const modalButtonOpen = document.querySelector(".js-modal-container")
modalButtonClose.addEventListener("click", onModalClose);
modalButtonOpen.addEventListener("click", onModalOpen)
function onModalClose() {
    overlay.classList.add("visually-hidden")
}

function onModalOpen() {
    
    overlay.classList.remove('visually-hidden')
}