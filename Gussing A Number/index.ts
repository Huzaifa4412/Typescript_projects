#!/usr/bin/env node
// Guessing a "Number",
import inquirer from "inquirer";
let compgues = Math.floor(Math.random()*10+1);
let answer = await inquirer.prompt([
  {
    message: "Enter a number between 1 to 10",
    type: "number",
    name: "userguess",
  },
]);
if (answer.userguess >=1 && answer.userguess <= 10) {
  console.log(answer.userguess);
  if (answer.userguess === compgues) {
    console.log("You Won");
    console.log(`Computer number is:  ${compgues} and your number is:  ${answer.userguess}` ) ;
}
else{
    if(answer.userguess < compgues-1){
        console.log("Number is less than computer number");
    console.log(`Computer number is:  ${compgues} and your number is:  ${answer.userguess}` ) ;
    console.log("Not a big Deal you have Power to achieve it ");
    console.log("Keep it up Legent you can do it");

    }
    else if(answer.userguess > compgues+1){
        console.log("Number is greater than computer number");
    console.log(`Computer number is:  ${compgues} and your number is:  ${answer.userguess}` ) ;
    console.log("Not a big Deal you have Power to achieve it ");
    console.log("Keep it up Legent you can do it");

    }
    else{
        console.log("Number is Very close to computer number");
    console.log(`Computer number is:  ${compgues} and your number is:  ${answer.userguess}` ) ;            console.log("You were close to it champ");
    console.log("Keep it up Legent you can do it");

}
}
}
else{
    console.log("Please Enter the Number 1-10");
    
}
