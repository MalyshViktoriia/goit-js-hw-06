const inputValue = document.querySelector('input#name-input');
const outputValue = document.querySelector('span#name-output');


const showOutput = (event) => {
   if (event.currentTarget.value === '') {
    outputValue.textContent = 'Anonymous';
   } else {
    outputValue.textContent = event.currentTarget.value;
   }
};

inputValue.addEventListener('input', showOutput);