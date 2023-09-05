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
// Add a function that allows EventListening on Buttons and that checks what button was clicked.
// I KNOW THIS IS A HUGE MESS BUT I AM SO F*CKING HAPPY IT WORKS :DDDD!!!
function buttonParser() {
    let value1 = "";
    let value2 = "";
    let currentOperator = "";
    let decimalAdded = false; // Track if a decimal point has been added
    const calculatorButtons = document.querySelectorAll("#buttonfield button");
    calculatorButtons.forEach((button) => {
      button.addEventListener("click", () => {
        // If the button that was clicked is a number or ".", add it to the appropriate value
        if (!isNaN(button.textContent)) {
          if (currentOperator === "") {
            value1 += button.textContent;
            setDisplay(value1);
          } else {
            value2 += button.textContent;
            setDisplay(value2);
          }
        } else if (button.textContent === "." && !decimalAdded) {
          // Handle the decimal point button
          if (currentOperator === "") {
            value1 += button.textContent;
            setDisplay(value1);
          } else {
            value2 += button.textContent;
            setDisplay(value2);
          }
          decimalAdded = true;
        } else if (isNaN(button.textContent) && button.textContent !== ".") {
          if (button.textContent !== "=" && button.textContent !== "C") {
            currentOperator = button.textContent;
            decimalAdded = false; // Reset the decimal flag when an operator is pressed
          } else if (button.textContent === "C") {
            value1 = "";
            value2 = "";
            currentOperator = "";
            decimalAdded = false; // Reset the decimal flag when the "C" button is pressed
            setDisplay(0);
          }
        }
        if (currentOperator !== "" && button.textContent === "=") {
          setDisplay(operate(currentOperator, value1, value2));
          value1 = operate(currentOperator, value1, value2);
          value2 = "";
          decimalAdded = false; // Reset the decimal flag after calculation
        }
      });
    });
  }
  

function setDisplay(value) {
  let currentDisplay = document.querySelector("#textcontent");
  currentDisplay.textContent = value;
}

buttonParser();
