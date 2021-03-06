// Created By: Jacob Bonner
// Created On: December 2020
// This program pushes a user inputted integer to a stack.

// Importing the class JacobStack from another file
const JacobStack = require("./jacob_stack");

// Defining prompt for getting user input
const prompt = require('prompt-sync')({sigint: true});

// Declaring stack by using the JacobStack class
let stack = new JacobStack();

try {
  // User input for size of stack 
  const stackSize = prompt("How many integers would you like for the stack: ");
  console.log();

  if (isNaN(stackSize) == true) {
    console.log("ERROR: Invalid Input");
  } else {
    for (let counter = 0; counter < stackSize; counter++) {
      // User input for an integer for the stack
      const userInput = prompt("Enter an Integer for the Stack: ");
      console.log();

      // Placing the inputted integer on the stack
      if (isNaN(userInput) == true) {
        // Output for an error if the user inputs something that is not a number
        console.log("ERROR: Invalid Input");
        break;
      } else {
        // Pushing and verifying the inputted number to the top of the stack
        stack.pushNumber(userInput);
        if (counter == stackSize - 1) {
          // Popping the most recent integer and returning it to the user
            console.log("Number Popped From ArrayList:", stack.popNumber());

          // Printing the current values in the stack
          console.log(stack.currentStack());
        } else {
          continue;
        }
      }
    }
  }

  // Catches and tells the user that an improper input was entered
} catch (err) {
  console.log("ERROR: Invalid Input");
}
