"use strick";

const nameInput = document.getElementById("input#name-input");
const nameOutput = document.getElementById("span#name-output");

nameInput.addEventListener("input", function () {
    const trimmedValue = nameInput.value.trim();
    const outputName = trimmedValue === "" ? "Anonymous" : trimmedValue;
    nameOutput.textContent = outputName;
    });

