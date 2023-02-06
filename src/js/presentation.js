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
const sixthBtn = document.querySelector('.sixth-btn__press');
const sixthBack = document.querySelector('.sixth-backdrop');
firstBtn.addEventListener('click', onFirstClick);
secondBtn.addEventListener('click', onSecondClick);
thirdBtn.addEventListener('click', onThirdClick);
fourthBtn.addEventListener('click', onFourthClick);
fifthBtn.addEventListener('click', onFifthClick);
sixthBtn.addEventListener('click', onSixthClick);

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
  fourthBack.classList = 'fourth-thumb backdrop__press is-hidden';
}

function onFifthClick() {
  fifthBack.classList = 'fifth-backdrop backdrop__press is-hidden';
}

function onSixthClick() {
  sixthBack.classList = 'sixth-backdrop backdrop__press is-hidden';
}
