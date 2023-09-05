let val1, val2, operator;
let expression = ''
let expression2 = ''

function add(val1, val2) {
    return val1 + val2;
}

function subtract(val1, val2) {
    return val1 - val2;
}

function multiply(val1, val2) {
    return val1 * val2;
}

function divide(val1, val2) {
    return val1 / val2;
}

function operate(operator, val1, val2) {
    switch (operator) {
        case "+":
            return add(val1, val2);
        case "-":
            return subtract(val1, val2);
        case "*":
            return multiply(val1, val2);
        case "/":
            return divide(val1, val2);
        default:
            return "Invalid operator";
    }
}

function isEmpty(value){
    return (value == null || value.length === 0);
  }

function setDisplay(content) {
    const textField = document.querySelector("#textcontent");
    textField.textContent = content;
}

function numberButtons() {
    const buttonField = document.querySelectorAll("#buttonfield button");

    buttonField.forEach((button) => {
        button.addEventListener("click", () => {
            let currentNumber = button.innerText;
        })
    })
}
numberButtons();
setDisplay();