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
  const calculatorButtons = document.querySelectorAll("#buttonfield button");
  calculatorButtons.forEach((button) => {
    button.addEventListener("click", () => {
      // If the button that was clicked is a number -> add that to our first value
      if (!isNaN(button.textContent) && currentOperator == "") {
        value1 += button.textContent;
        value1 = parseFloat(value1);
        setDisplay(value1);
      } else if (isNaN(button.textContent) && button.textContent != ".") {
        if (button.textContent != "=" && button.textContent != "C") {
          currentOperator = button.textContent;
        } else if (button.textContent == "C") {
          value1 = "";
          value2 = "";
          currentOperator = "";
          setDisplay(0);
        } 
      }
      if (!isNaN(button.textContent) && currentOperator != "") {
        value2 += button.textContent;
        value2 = parseFloat(value2);
        setDisplay(value2);
      }
      if (currentOperator != "" && button.textContent == "=") {
        let passValues = operate(currentOperator, value1, value2);
        if(passValues < Number.MAX_VALUE) {
            setDisplay(passValues);
            value1 = operate(currentOperator, value1, value2);
            value2 = "";
        } else {
            setDisplay("Out of bounds!");
            value1 = "";
            value2 = "";
        }

      }
    });
  });
}

function setDisplay(value) {
  let currentDisplay = document.querySelector("#textcontent");
  currentDisplay.textContent = value;
}

buttonParser();
