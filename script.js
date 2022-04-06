let firstNumber = "";
let secondNumber = "";
let operation = null;
let fullOperation = null;
let result = ""

const numberButtons = document.querySelectorAll('[data-number');
const operatorButtons = document.querySelectorAll('[data-operator');
const equalsButton = document.querySelector('.equalsButton');
const clearButton = document.querySelector('.clearButton');
const deleteButton = document.querySelector('.deleteButton');
const pointButton = document.querySelector('.pointButton');
const screenCurrent = document.querySelector('.screenCurrent');
const screenLast = document.querySelector('.screenLastOp');

deleteButton.addEventListener('click', deleteNumber);
clearButton.addEventListener('click', clear);
equalsButton.addEventListener('click', evaluate);


function add (a, b) {
    return a + b;
}

function subtract(a, b) {
    return a - b;
}

function multiply(a, b) {
    return a * b;
}

function divide(a, b) {
    return a / b;
}

function clearCurrentScreen() {
    screenCurrent.textContent = "";
}

function displayNumber(num) {
    if (screenCurrent.textContent === "0") {
        clearCurrentScreen();
    }
    screenCurrent.textContent += num;
}

function setOperation(op) {
    if (operation != null) {
        return;
    }
    setFirstNumber();

    operation = op;

    if (fullOperation === null) {
    fullOperation = firstNumber + " " + operation + " ";
    } else {
        fullOperation += firstNumber + " " + operation + " ";
    }

    screenLast.textContent = fullOperation;
    screenCurrent.textContent = 0;
    console.log(firstNumber + " " + operation)
}

function deleteNumber() {
    screenCurrent.textContent = 0;
}

function setFirstNumber() {
    firstNumber = screenCurrent.textContent;
}

function setSecondNumber() {
    secondNumber = screenCurrent.textContent;
}

function setSecondNumber() {
    secondNumber = screenCurrent.textContent;
}

function clear() {
    firstNumber = "";
    secondNumber = "";
    operation = null;
    screenLast.textContent = "";
    screenCurrent.textContent = 0;
    fullOperation = null;
}

function evaluate() {
    if (firstNumber === "") {
        return;
    }
    setSecondNumber();
    fullOperation += secondNumber + " = ";
    screenLast.textContent = fullOperation;
    result = compute(firstNumber, secondNumber, operation);
    screenCurrent.textContent = result;
    operation = null;
}

function compute(a, b, op) {
    a = Number(a);
    b = Number(b);
    switch (op) {
        case '+':
            return add(a, b);
        case '-':
            return subtract(a, b);
        case 'x':
            return multiply(a, b);
        case '÷': 
            if (b === 0) {
                return "Error";
            }
            return divide(a, b);
        default:
            return null;
    }
}


numberButtons.forEach((button) =>
    button.addEventListener('click', () => displayNumber(button.textContent)));

operatorButtons.forEach((button) =>
    button.addEventListener('click', () => setOperation(button.textContent)));

    
