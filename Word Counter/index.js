import inquirer from 'inquirer';
let ask_user = await inquirer.prompt({
    message: "Enter the sentence",
    name: "sentence",
    type: "input"
});
let output = ask_user.sentence.trim().split(/\s+/);
console.log(`You have written ${output.length} words`);
