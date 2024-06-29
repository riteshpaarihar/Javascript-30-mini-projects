const inputText = document.getElementById('input-text');
const resultElement = document.getElementById('result');
const checkButton = document.getElementById('btn');

// Function to check if a string is a palindrome
function isPalindrome(str) {
    const reversedStr = str.split('').reverse().join('');
    return str === reversedStr;
}

// Event listener for the button click
checkButton.addEventListener('click', () => {
    const word = inputText.value.toLowerCase().trim();
    if (word === '') {
        resultElement.textContent = 'Please enter a word.';
        resultElement.classList.add('error');
        return;
    }

    if (isPalindrome(word)) {
        resultElement.textContent = `"${word}" is a palindrome!`;
        resultElement.classList.remove('error');
        resultElement.classList.add('success');
    } else {
        resultElement.textContent = `"${word}" is not a palindrome.`;
        resultElement.classList.remove('success');
        resultElement.classList.add('error');
    }
});