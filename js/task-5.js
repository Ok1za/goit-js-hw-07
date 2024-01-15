"use strict";

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

document.querySelector('.change-color').addEventListener('click', function () {
    const bodyElement = document.body;
    const colorSpan = document.querySelector('.color');

    const randomHexColor = getRandomHexColor();

    bodyElement.style.backgroundColor = randomHexColor;

    colorSpan.textContent = randomHexColor;
});