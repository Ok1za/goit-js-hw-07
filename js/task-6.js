"use strict";

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const input = document.querySelector('input');
const createButton = document.querySelector('[data-create]');
const destroyButton = document.querySelector('[data-destroy]');
const boxesContainer = document.getElementById('boxes');

createButton.addEventListener('click', createBoxes);
destroyButton.addEventListener('click', destroyBoxes);

function createBoxes() {
    destroyBoxes();

    const amount = parseInt(input.value, 10);
    
    if (amount < 1 || amount > 100) {
        alert('Please enter a number between 1 and 100.');
        return;
    }

    const boxes = Array.from({ length: amount }, (_, index) => {
        const boxSize = 30 + index * 10;
        const box = document.createElement('div');
        box.style.width = `${boxSize}px`;
        box.style.height = `${boxSize}px`;
        box.style.backgroundColor = getRandomHexColor();
        return box;
    });

    boxesContainer.append(...boxes);

    input.value = '';
}

function destroyBoxes() {
    boxesContainer.innerHTML = '';
}