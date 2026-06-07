const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

function add(a, b) {
  return a + b;
}

function subtract(a, b) {
  return a - b;
}

function multiply(a, b) {
  return a * b;
}

function divide(a, b) {
  if (b === 0) {
    return "Cannot divide by zero";
  }
  return a / b;
}

function startCalculator() {
  console.log("\nCalculator Menu");
  console.log("1. Add");
  console.log("2. Subtract");
  console.log("3. Multiply");
  console.log("4. Divide");
  console.log("5. Exit");

  rl.question("Enter your choice: ", function (choice) {
    if (choice === "5") {
      console.log("Calculator Closed");
      rl.close();
      return;
    }

    rl.question("Enter first number: ", function (num1) {
      rl.question("Enter second number: ", function (num2) {
        num1 = parseFloat(num1);
        num2 = parseFloat(num2);
        let result;

        if (choice === "1") result = add(num1, num2);
        else if (choice === "2") result = subtract(num1, num2);
        else if (choice === "3") result = multiply(num1, num2);
        else if (choice === "4") result = divide(num1, num2);
        else {
          console.log("Invalid choice");
          startCalculator();
          return;
        }

        console.log("Result:", result);
        startCalculator(); // loop again
      });
    });
  });
}

startCalculator();
