"use strict";

document.getElementById('name-input').addEventListener('input', function () {
    const enteredName = this.value.trim();
    document.getElementById('name-output').textContent = enteredName === '' ? 'Anonymous' : enteredName;
    });

