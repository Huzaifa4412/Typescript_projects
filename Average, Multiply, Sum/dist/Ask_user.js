import inquirer from 'inquirer';
import chalk from 'chalk';
export let array = [];
export let ask_user = async () => {
    do {
        let ask_user = await inquirer.prompt([{
                message: chalk.yellow("Enter the Number step by step to form an array"),
                name: "askfor_array",
                type: "number"
            },
            {
                message: chalk.yellow("Do you want to add more"),
                name: "add_more",
                type: 'list',
                choices: ["Yes", "No"]
            }
        ]);
        array.push(ask_user.askfor_array);
        console.log(array);
        if (ask_user.add_more === "No") {
            return array;
            break;
        }
    } while (true);
};
