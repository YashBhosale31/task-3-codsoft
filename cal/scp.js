let displayValue = '0';

function inputValue(value) {
    if (displayValue === '0') {
        displayValue = value;
    } else {
        displayValue += value;
    }
    updateDisplay();
}

function clearDisplay() {
    displayValue = '0';
    updateDisplay();
}

function calculate() {
    try {
        displayValue = eval(displayValue).toString();
    } catch (e) {
        displayValue = 'Error';
    }
    updateDisplay();
}

function updateDisplay() {
    document.getElementById('display').innerText = displayValue;
}

function toggleSign() {
    if (displayValue.startsWith('-')) {
        displayValue = displayValue.slice(1);
    } else {
        displayValue = '-' + displayValue;
    }
    updateDisplay();
}

function percentage() {
    displayValue = (parseFloat(displayValue) / 100).toString();
    updateDisplay();
}

document.querySelector('.buttons').addEventListener('click', function(event) {
    if (event.target.innerText === '+/-') {
        toggleSign();
    } else if (event.target.innerText === '%') {
        percentage();
    }
});
