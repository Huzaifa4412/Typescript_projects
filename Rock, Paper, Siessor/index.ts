#!/usr/bin/env node
import inquirer from "inquirer"
console.log("Welcome to Rock, Paper, Siessor Game");

let useropt = await inquirer.prompt([
    {
        message:"Please Select your option",
        name:"useropt",
    }
])

console.log(`Thank you for using this program ❤  😍`)
console.log(`Developed By: Huzaifa Mukhtar`);