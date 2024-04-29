#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
const Scissor: number = 1;
const Paper: number = 2;
const Rock: Number = 3;
let user_point = 0; 
let comp_point = 0;
let number_of_games = 0;
console.log(chalk.bold.yellow.visible("Welcome to Rock, Paper, Scissor Game"));
console.log("For Scissor type  ", chalk.red("1"));
console.log("For Paper type  ", chalk.red("2"));
console.log("For Rock type  ", chalk.red("3"));
do {
    let compopt = Math.floor(Math.random() * 3 + 1);
    let answer = await inquirer.prompt([
    {
      message: "Please Select your option",
      name: "useropt",
      type: "number",
    },
  ]);
  if (answer.useropt >= 1 && answer.useropt <= 3) {
    if (answer.useropt === 1) {
      console.log("You Select Scissor");
    } else if (answer.useropt === 2) {
      console.log("You Select Paper");
    } else {
      console.log("You Select Rock");
    }
    if (compopt === 1) {
      console.log("Computer Select Scissor");
    } else if (compopt === 2) {
      console.log("Computer Select Paper");
    } else {
      console.log("Computer Select Rock");
    }
    if (answer.useropt === compopt) {
      console.log(chalk.blueBright.bold("You both select the same Tool \n"), chalk.bgCyan.yellowBright.bold("Game Draw"));
    } else if (answer.useropt === 1 && compopt === 2) {
        user_point += 1;
        number_of_games += 1;
      console.log(chalk.yellowBright.bold("'Congratulation you 'Won'"));
    } else if (answer.useropt === 2 && compopt === 3) {
        number_of_games += 1;
        user_point += 1;
        console.log(chalk.yellowBright.bold("'Congratulation you 'Won'"));
    } else if (answer.useropt === 3 && compopt === 1) {
        number_of_games += 1;
        user_point += 1;

        console.log(chalk.yellowBright.bold("'Congratulation you 'Won'"));
    } else {
        number_of_games += 1;
        comp_point += 1;

      console.log(chalk.yellowBright.bold("'Computer 'Won'"));

    }
  } else {
    console.log("Please Enter the Number between 1-3");
  }
  let ask_user = await inquirer.prompt({
    message: chalk.magentaBright("Do you want to play again ??"),
    name: "continue",
    type: "list",
    choices: ["Yes", "No"],
    // default:"yes"
  });
  if (ask_user.continue === "Yes") {
    var loop = true;
  } else {
    loop = false;
  }
} while (loop);
user_point*=100/10;
comp_point*=100/10;
console.log(`The number of games you played ${chalk.blue.bold(number_of_games)}`);
console.log(`Your point is "${chalk.yellowBright.bold(user_point)}" and computer point is "${chalk.yellowBright.bold(comp_point)}"`);
console.log(chalk.blueBright.bold(`Thank you for using this program`));
console.log("Developed By: ",chalk.magentaBright.bold(`Huzaifa Mukhtar`));