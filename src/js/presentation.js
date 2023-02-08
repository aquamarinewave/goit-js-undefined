const firstBtn = document.querySelector('.first-btn__press');
const firstBack = document.querySelector('.press__first-backdrop');
const secondBtn = document.querySelector('.second-btn__press');
const secondBack = document.querySelector('.press__second-backdrop');
const thirdBtn = document.querySelector('.third-btn__press');
const thirdBack = document.querySelector('.press__third-backdrop');
const fourthBtn = document.querySelector('.fourth-btn__press');
const fourthBack = document.querySelector('.press__fourth-thumb');
const fifthBtn = document.querySelector('.fifth-btn__press');
const fifthBack = document.querySelector('.press__fifth-backdrop');
const sixthBtn = document.querySelector('.sixth-btn__press');
const sixthBack = document.querySelector('.press__sixth-backdrop');
firstBtn.addEventListener('click', onFirstClick);
secondBtn.addEventListener('click', onSecondClick);
thirdBtn.addEventListener('click', onThirdClick);
fourthBtn.addEventListener('click', onFourthClick);
fifthBtn.addEventListener('click', onFifthClick);
sixthBtn.addEventListener('click', onSixthClick);

function onFirstClick() {
  firstBack.classList.add('is-hidden');
}
function onSecondClick() {
  secondBack.classList = 'press__second-backdrop backdrop__press is-hidden';
}
function onThirdClick() {
  thirdBack.classList = 'press__third-backdrop backdrop__press is-hidden';
}
function onFourthClick() {
  fourthBack.classList = 'press__fourth-thumb backdrop__press is-hidden';
}

function onFifthClick() {
  fifthBack.classList = 'press__fifth-backdrop backdrop__press is-hidden';
}

function onSixthClick() {
  sixthBack.classList = 'press__sixth-backdrop backdrop__press is-hidden';
}
