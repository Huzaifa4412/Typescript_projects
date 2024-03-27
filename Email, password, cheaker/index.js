import inquirer from 'inquirer';
const recieve = await inquirer.prompt([
    {
        message: 'Please Enter Your Email',
        name: 'email',
        type: 'email'
    },
    {
        message: 'Please Enter Your Password',
        name: 'password',
        type: 'password'
    }
]);
console.log(recieve);
