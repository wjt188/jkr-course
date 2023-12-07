const calculatorScreen = document.querySelector('.calculator-screen');
const buttons = document.querySelectorAll('.calculator-keys button');

let prevInput = '0';
let calculationOperator = '';
let currentInput = '0';

function updateScreen(number) {
    if (calculatorScreen.value === '0') {
        calculatorScreen.value = number;
    } else {
        calculatorScreen.value += number;
    }
}

function inputNumber(event) {
    const { value } = event.target;
    currentInput = (currentInput === '0') ? value : currentInput + value;
    updateScreen(currentInput);
}

function inputOperator(event) {
    const { value } = event.target;
    prevInput = currentInput;
    calculationOperator = value;
    currentInput = '';
}

function calculate() {
    let result = 0;
    switch(calculationOperator) {
        case '+':
            result = parseFloat(prevInput) + parseFloat(currentInput);
            break;
        case '-':
            result = parseFloat(prevInput) - parseFloat(currentInput);
            break;
        case '*':
            result = parseFloat(prevInput) * parseFloat(currentInput);
            break;
        case '/':
            result = parseFloat(prevInput) / parseFloat(currentInput);
            break;
        default:
            return;
    }
    currentInput = result.toString();
    calculationOperator = '';
}

function clearAll() {
    prevInput = '0';
    calculationOperator = '';
    currentInput = '0';
}

function inputDecimal() {
    if (!currentInput.includes('.')) {
        currentInput += '.';
    }
}

buttons.forEach((button) => {
    if(button.classList.contains('operator')) {
        button.addEventListener('click', inputOperator);
    } else if(button.classList.contains('decimal')) {
        button.addEventListener('click', inputDecimal);
    } else if(button.classList.contains('all-clear')) {
        button.addEventListener('click', clearAll);
    } else {
        button.addEventListener('click', inputNumber);
    }
});

const equalSign = document.querySelector('.equal-sign');
equalSign.addEventListener('click', () => {
    calculate();
    updateScreen(currentInput);
});