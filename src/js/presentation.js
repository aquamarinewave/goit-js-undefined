const firstBtn = document.querySelector('.first-btn__press');
const firstBack = document.querySelector('.first-backdrop');
const secondBtn = document.querySelector('.second-btn__press');
const secondBack = document.querySelector('.second-backdrop');
const thirdBtn = document.querySelector('.third-btn__press');
const thirdBack = document.querySelector('.third-backdrop');
const fourthBtn = document.querySelector('.fourth-btn__press');
const fourthBack = document.querySelector('.fourth-backdrop');
firstBtn.addEventListener('click', onFirstClick);
secondBtn.addEventListener('click', onSecondClick);
thirdBtn.addEventListener('click', onThirdClick);
fourthBtn.addEventListener('click', onFourthClick);

function onFirstClick() {
  firstBack.classList = 'first-backdrop backdrop__press is-hidden';
}
function onSecondClick() {
  secondBack.classList = 'second-backdrop backdrop__press is-hidden';
}
function onThirdClick() {
  thirdBack.classList = 'third-backdrop backdrop__press is-hidden';
}
function onFourthClick() {
  firstBack.classList = 'fourth-backdrop backdrop__press is-hidden';
}
