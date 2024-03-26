// Guessing a "Number",

import inquirer from "inquirer";
let compgues = 3;
let userguess = await inquirer.prompt([
    {
        message:"Enter a number between 1 to 10",
        type:"number",
        name: "userguess",
    }
])
if(us){
console.log(userguess.userguess);
}