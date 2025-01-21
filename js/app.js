class Calculator {
  add(a, b) {
    return a + b;
  }

  subtract(a, b) {
    return a - b;
  }

  multiply(a, b) {
    return a * b;
  }

  divide(a, b) {
    if (b === 0) {
      throw new Error("Zero is not allowed.");
    }
    return a / b;
  }
}
function performCalculation() {
  const num1 = parseFloat(document.getElementById("num1").value);
  const num2 = parseFloat(document.getElementById("num2").value);
  const operation = document.getElementById("operation").value;
  const calculator = new Calculator();
  let result;

  try {
    switch (operation) {
      case "add":
        result = calculator.add(num1, num2);
        break;
      case "subtract":
        result = calculator.subtract(num1, num2);
        break;
      case "multiply":
        result = calculator.multiply(num1, num2);
        break;
      case "divide":
        result = calculator.divide(num1, num2);
        break;
      default:
        result = "Invalid";
    }
  } catch (error) {
    result = error.message;
  }

  document.getElementById("result").innerText = `${result}`;
}
document.getElementById("calculateBtn").addEventListener("click", performCalculation);
