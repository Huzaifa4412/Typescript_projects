#! /usr/bin/env node
// * Calculator using function and loop
import inquirer from "inquirer";
let use_more = undefined;
let comfirm_user = undefined;
console.log(`Welcome to the calculator`);
do {
  let answer = await inquirer.prompt([
    {
      message: "Enter The First Number",
      type: "number",
      name: "didifirst",
    },
    {
      message: "Enter The Second Number",
      type: "number",
      name: "didisecond",
    },
    {
      message: "Select The Operator",
      type: "list",
      name: "operator",
      choices: ["+", "-", "*", "/"],
    },
  ]);
  // Function
  let calculator = async (didifirst: number, didisecond: number) => {
    if (answer.operator == "+") {
      return console.log(
        `Your result is : ${answer.didifirst} + ${answer.didisecond} = ${
          answer.didifirst + answer.didisecond
        }`
      );
    } else if (answer.operator == "-") {
      return console.log(
        `Your result is : ${answer.didifirst} - ${answer.didisecond} = ${
          answer.didifirst - answer.didisecond
        }`
      );
    } else if (answer.operator == "*") {
      return console.log(
        `Your result is : ${answer.didifirst} * ${answer.didisecond} = ${
          answer.didifirst * answer.didisecond
        }`
      );
    } else if (answer.operator == "/") {
      return console.log(
        `Your result is : ${answer.didifirst} / ${answer.didisecond} = ${
          answer.didifirst / answer.didisecond
        }`
      );
    } else {
      return console.log("Invalid operation Please select the valid operation");
    }
  };
  // Function Call
  calculator(answer.didifirst, answer.didisecond);
  let ask_user = await inquirer.prompt([
    {
      message: "Do Your want to more calculate or EXIT",
      type: "list",
      name: "ask_user",
      choices: ["Use-more", "EXIT"],
    },
  ]);
  // let use_more = false;
  if (ask_user.ask_user === "Use-more") {
    use_more = true;
  } else {
      console.log("Thank you for using this program ❤ 😊 😍 ");
      use_more = false;
  }
} while (comfirm_user = use_more)

   // ! Second Method to perform calculation
  // let answer = await inquirer.prompt([
  //   {
  //     message: "Enter The First Number",
  //     type: "number",
  //     name: "didifirst",
  //   },
  //   {
  //     message: "Enter The Second Number",
  //     type: "number",
  //     name: "didisecond",
  //   },
  //   {
  //     message: "Select The Operator",
  //     type: "list",
  //     name: "operator",
  //     choices: ["+", "-", "*", "/"],
  //   },
  // ]);
  
  // let calculator = (didifirst:number, didisecond:number, operator:string) => {
  //   if (operator === "+") {
  //     return didifirst + didisecond;
  //   } else if (operator === "-") {
  //     return didifirst - didisecond;
  //   } else if (operator === "*") {
  //     return didifirst * didisecond;
  //   } else if (operator === "/") {
  //     return didifirst / didisecond;
  //   } else {
  //     return "Invalid operation Please select the valid operation";
  //   }
  // };
  
  // let result = calculator(answer.didifirst, answer.didisecond, answer.operator);
  
  // console.log(`Your result is : ${result}`);
