const firstBtn = document.querySelector('.press__first-btn');
const firstBack = document.querySelector('.press__first-backdrop');
const secondBtn = document.querySelector('.press__second-btn');
const secondBack = document.querySelector('.press__second-backdrop');
const thirdBtn = document.querySelector('.press__third-btn');
const thirdBack = document.querySelector('.press__third-backdrop');
const fourthBtn = document.querySelector('.press__fourth-btn');
const fourthBack = document.querySelector('.press__fourth-thumb');
const fifthBtn = document.querySelector('.press__fifth-btn');
const fifthBack = document.querySelector('.press__fifth-backdrop');
const sixthBtn = document.querySelector('.press__sixth-btn');
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
  secondBack.classList.add('is-hidden');
}
function onThirdClick() {
  thirdBack.classList.add('is-hidden');
}
function onFourthClick() {
  fourthBack.classList.add('is-hidden');
}

function onFifthClick() {
  fifthBack.classList.add('is-hidden');
}

function onSixthClick() {
  sixthBack.classList.add('is-hidden');
}
