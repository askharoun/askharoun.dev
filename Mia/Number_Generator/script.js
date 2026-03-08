// Grab the elements from the HTML
const minInput = document.getElementById('minVal');
const maxInput = document.getElementById('maxVal');
const generateBtn = document.getElementById('generateBtn');
const resultDisplay = document.getElementById('result');

// Add a click event to the button
generateBtn.addEventListener('click', () => {
    // Convert the input values to actual numbers
    const min = parseInt(minInput.value);
    const max = parseInt(maxInput.value);

    // Check if the inputs are valid
    if (isNaN(min) || isNaN(max)) {
        resultDisplay.textContent = "Oops!";
        resultDisplay.style.fontSize = "30px";
        alert("Please enter both a minimum and maximum number.");
        return;
    }

    if (min > max) {
        resultDisplay.textContent = "Uh oh!";
        resultDisplay.style.fontSize = "30px";
        alert("The minimum number can't be bigger than the maximum!");
        return;
    }

    // Reset font size just in case it was changed by an error
    resultDisplay.style.fontSize = "48px";

    // Generate the random number
    const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;

    // Display the result
    resultDisplay.textContent = randomNumber;
});