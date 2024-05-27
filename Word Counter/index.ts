#!/usr/bin/env node
import inquirer from 'inquirer';
do{
let ask_user:{
    sentence : string
} = await inquirer.prompt({
    message:"Enter the sentence",
    name:"sentence",
    type:"input"
})
let output = ask_user.sentence.trim().split(/\s+/)
console.log(`You have written ${output.length} words`);
let ask_user_more = await inquirer.prompt({
    message:"Do you want to use again",
    name:"again",
    type:"list",
    choices:['Yes',"No"]
})
if (ask_user_more.again === "Yes") {
    var loop = true;
}
else{
    var loop = false;
}
}while (loop)