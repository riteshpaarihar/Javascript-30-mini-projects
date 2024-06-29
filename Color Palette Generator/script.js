// script.js
document.getElementById('generate').addEventListener('click', generatePalette);
document.getElementById('set-bg').addEventListener('click', setBackgroundColor);

const colorPickers = document.querySelectorAll('input[type="color"]');

colorPickers.forEach((picker, index) => {
    picker.addEventListener('input', () => {
        document.getElementById(`color${index + 1}`).style.backgroundColor = picker.value;
    });
});

function generatePalette() {
    for (let i = 1; i <= 5; i++) {
        const color = getRandomColor();
        document.getElementById(`color${i}`).style.backgroundColor = color;
        document.getElementById(`picker${i}`).value = color;
    }
}

function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

function setBackgroundColor() {
    const colors = [];
    for (let i = 1; i <= 5; i++) {
        colors.push(document.getElementById(`picker${i}`).value);
    }
    document.body.style.background = `linear-gradient(to right, ${colors.join(', ')})`;
}

// Generate an initial palette on page load
generatePalette();