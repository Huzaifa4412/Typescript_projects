#!/usr/bin/env node
//* Start Importing Files
// importing inquirer
import inquirer from "inquirer";
// Importing Chalk liberay
import chalk from "chalk";
//* End Importing Files
// Add currency which i use in my project
let loop = undefined;
let currency = {
    USD: 1, // ? Base Currency
    PKR: 278.32,
    INR: 83.4,
    GBP: 0.8,
    EUR: 0.93,
    IRR: 42000.01,
    SAR: 3.75,
    JPY: 158.33,
    CAD: 1.37,
};
do {
    // Asking user for currency conversion
    let ask_user = await inquirer.prompt([
        {
            message: chalk.yellow.visible.bold("Choose your currency that you want to convert from"),
            name: "from",
            type: "list",
            choices: ["USD", "PKR", "INR", "GBP", "EUR", "IRR", "SAR", "JPY", "CAD"],
        },
        {
            message: chalk.yellow.visible.bold("Choose your currency that you want to convert in"),
            name: "to",
            type: "list",
            choices: ["USD", "PKR", "INR", "GBP", "EUR", "IRR", "SAR", "JPY", "CAD"],
        },
        {
            name: "amount",
            type: "number",
            message: chalk.yellow.visible.bold("Enter your amount"),
        },
    ]);
    // Converting currency
    let from_ammount = currency[ask_user.from];
    let to_ammount = currency[ask_user.to];
    let ammount = ask_user.amount;
    let base_ammount = ammount / from_ammount;
    let result = base_ammount * to_ammount;
    console.log(chalk.yellow.visible.bold(`Your amount is ${chalk.blue.bold(result)}`));
    let ask_user_more = await inquirer.prompt({
        message: "Do you want to use more repeat ?",
        name: "use_more",
        type: "list",
        choices: ["Yes", "No"],
    });
    if (ask_user_more.use_more === "Yes") {
        loop = true;
    }
    else {
        loop = false;
    }
} while (loop);
