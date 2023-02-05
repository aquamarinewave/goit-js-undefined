const firstBtn = document.querySelector('.first-btn__press');
const firstBack = document.querySelector('.first-backdrop');
const secondBtn = document.querySelector('.second-btn__press');
const secondBack = document.querySelector('.second-backdrop');
const thirdBtn = document.querySelector('.third-btn__press');
const thirdBack = document.querySelector('.third-backdrop');
const fourthBtn = document.querySelector('.fourth-btn__press');
const fourthBack = document.querySelector('.fourth-thumb');
const fifthBtn = document.querySelector('.fifth-btn__press');
const fifthBack = document.querySelector('.fifth-backdrop');
firstBtn.addEventListener('click', onFirstClick);
secondBtn.addEventListener('click', onSecondClick);
thirdBtn.addEventListener('click', onThirdClick);
fourthBtn.addEventListener('click', onFourthClick);
fifthBtn.addEventListener('click', onFifthClick);

function onFirstClick() {
  firstBack.classList.add = 'is-hidden';
}
function onSecondClick() {
  secondBack.classList.add = 'is-hidden';
}
function onThirdClick() {
  thirdBack.classList.add = 'is-hidden';
}
function onFourthClick() {
  fourthBack.classList.add = 'is-hidden';
}

function onFifthClick() {
  fifthBack.classList.add = 'is-hidden';
}
