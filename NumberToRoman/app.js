let input = document.querySelector('#input');
let convertBtn = document.querySelector('#convert');
let result = document.querySelector('#result');

const romanObject = {
    M: 1000,
    CM: 900,
    D: 500,
    CD: 400,
    C: 100,
    XC: 90,
    L: 50,
    XL: 40,
    XXX: 30,
    XX: 20,
    X: 10,
    IX: 9,
    V: 5,
    IV: 4,
    I: 1,
};

function numToRomanNum(num) {
    let roman = '';
    for (let key in romanObject) {
        while (num >= romanObject[key]) {
            roman += key;
            num -= romanObject[key];
        }
    }
    return roman;
}
convertBtn.addEventListener('click', () => {
    let inputValue = input.value;
    if (inputValue < 1 || inputValue > 5000) {
        result.textContent = 'Please enter a number between 1 and 5000.';
    } else {
        let romanNumeral = numToRomanNum(inputValue);
        result.textContent = `${inputValue} in Roman numerals is ${romanNumeral}.`;
    }
    input.value = "";
});