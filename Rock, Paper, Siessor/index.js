#!/usr/bin/env node
import inquirer from "inquirer";
console.log("Welcome to Rock, Paper, Scissor Game");
console.log("For Scissor type  '1");
console.log("For Paper type  '2");
console.log("For Rock type  '3");
let compopt = Math.floor(Math.random() * 3 + 1);
const Scissor = 1;
const Paper = 2;
const Rock = 3;
let answer = await inquirer.prompt([
    {
        message: "Please Select your option",
        name: "useropt",
        type: "number",
    }
]);
if (answer.useropt >= 1 && answer.useropt <= 3) {
    if (answer.useropt === 1) {
        console.log("You Select Scissor");
    }
    else if (answer.useropt === 2) {
        console.log("You Select Paper");
    }
    else {
        console.log("You Select Rock");
    }
    if (compopt === 1) {
        console.log("Computer Select Scissor");
    }
    else if (compopt === 2) {
        console.log("Computer Select Paper");
    }
    else {
        console.log("Computer Select Rock");
    }
    if (answer.useropt === compopt) {
        console.log("You both select the same Tool \n Game Draw");
    }
    else if (answer.useropt === 1 && compopt === 2) {
        console.log("'Congratulation you 'Won''");
    }
    else if (answer.useropt === 2 && compopt === 3) {
        console.log("'Congratulation you 'Won'");
    }
    else if (answer.useropt === 3 && compopt === 1) {
        console.log("'Congratulation you 'Won'");
    }
    else {
        console.log("'Computer 'Won'");
    }
}
else {
    console.log("Please Enter the Number between 1-3");
}
console.log(`Thank you for using this program ❤  😍`);
console.log(`Developed By: Huzaifa Mukhtar`);
