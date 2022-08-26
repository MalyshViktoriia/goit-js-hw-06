const inputRangeEl = document.querySelector("#font-size-control");

const spanEl = document.querySelector("#text");

spanEl.style.fontSize = `${inputRangeEl.value}px`;

inputRangeEl.addEventListener('input', changeStyle);

function changeStyle(event) {
    spanEl.style.fontSize= event.currentTarget.value  + "px";
};
