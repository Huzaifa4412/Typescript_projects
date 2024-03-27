import inquirer from 'inquirer';
const recieve = await inquirer.prompt([
    {
        message: 'Please Enter Your username',
        name: 'username',
        type: 'input'
    },
    {
        message: 'Please Enter Your Password',
        name: 'password',
        type: 'password'
    }
]);
console.log(`Please Enter Your username and Password again`);
let usernameConfirm = await inquirer.prompt({
    message: 'Please Enter Your username Again to confirm',
    name: 'username-com',
});
let passwordComfirm = await inquirer.prompt({
    message: 'Please Enter Your Password Again to confirm',
    name: 'password-com'
});
if (recieve.username == usernameConfirm['username-com'] && recieve.password == passwordComfirm['password-com']) {
    console.log('You are login');
    console.log(`You Enter The Correct Password`);
}
else if (recieve.username != usernameConfirm['username-com']) {
    console.log(`Please Enter the correct username`);
}
else if (recieve.password != passwordComfirm['password-com']) {
    console.log(`Please Enter the correct Password`);
}
else {
    console.log(`Please Enter the correct username and Password`);
}
