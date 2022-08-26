function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
}

// const refs = {
//   bodyEl: document.querySelector('body'),
//   magicBtn: document.querySelector('.change-color'),
//   spanOutput: document.querySelector('.color'),
// };

// refs.magicBtn.addEventListener('click', bodyColorHandler);

// function bodyColorHandler() {
//   refs.bodyEl.style.backgroundColor = getRandomHexColor();
//   refs.spanOutput.textContent = getRandomHexColor();
// };


const buttonRef = document.querySelector('.change-color');
const spanEl = document.querySelector('.color');
buttonRef.addEventListener('click', () => {
  spanEl.textContent = getRandomHexColor();
  document.body.setAttribute(
    'style',
    'background-color: ' + spanEl.textContent
  );
});