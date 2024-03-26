#!/usr/bin/env node
import inquirer from "inquirer"
console.log("Welcome to Rock, Paper, Siessor Game");
console.log("For Siessor type  '1");
console.log("For Paper type  '2");
console.log("For Rock type  '3");
let compopt = Math.floor(Math.random()*3+1);
let answer = await inquirer.prompt([
    {
        message:"Please Select your option",
        name:"useropt",
        type:"number",
    }
])
if(answer.useropt>=1 && answer.useropt<=3){
    if(answer.useropt===1){
        console.log("You Select Siessor");
    }
    else if(answer.useropt===2){
        console.log("You Select Paper");
    }
    else{
        console.log("You Select Rock");
    }
    if(compopt===1){
        console.log("Computer Select Siessor");
    }
    else if(compopt===2){
        console.log("Computer Select Paper");
    }
    else{
        console.log("Computer Select Rock");
    }
    if(answer.useropt===compopt){
}

else{
    console.log("Please Enter the Number between 1-3");
    
}
console.log(`Thank you for using this program ❤  😍`)
console.log(`Developed By: Huzaifa Mukhtar`);