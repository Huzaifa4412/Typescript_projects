#!/usr/bin/env node
import chalk from 'chalk';
import inquirer from 'inquirer'
console.log(`Wellcome to our Atm machine`);
const pin = 1234;
let User_money = 60;
let user_loop = undefined;
let comfirm_user = undefined;
let saving = 2500;
const confirm_pin = await inquirer.prompt([
    {
        message: "Enter your Pin",
        name:`User_pin_confirm`,
        type:'number',
    }
])
if (pin===confirm_pin.User_pin_confirm) {
    do{
    console.log(`Your pin is correct`);
    let user_opt = await inquirer.prompt([
        {
            message:chalk.blue.bold( "What you want to do\nSelect your option"),
            name: `User_opt`,
            type:'list',
            choices:['Withdraw','Add Money','Balance Enquiry/Cheak']
        },
    ])
    if (user_opt.User_opt==='Withdraw') {
        console.log(chalk.red.bold.underline(`Your Money on Bank is ${User_money}`));
        let withdraw_money = await inquirer.prompt({
            message: "Enter the ammount of money that you want to withdraw from your account",
            name: `withdraw_money`,
            type: 'number',
        })
        if (withdraw_money.withdraw_money <= User_money) {

            console.log(`Your Money left in the bank is "${chalk.green.bold(User_money -= withdraw_money.withdraw_money)}"`);
        }
        else{
            console.log(`You don't have enough money in your account`);
            
        }

    }
    else if (user_opt.User_opt === 'Add Money') {
        let ammount_add_money = await inquirer.prompt([{
            message:"How much ammount you want to Add",
            name:"ammount_add",
            type:'number'
        },
        // {
        //     message:'Enter you Number for reciving message',
        //     name:"number_deposite",
        //     type:'number'
        // }
    ])
    // let user_number = ammount_add_money.number_deposite
    // console.log(user_number);
    
    User_money += ammount_add_money.ammount_add
        console.log(`Your ammount "${chalk.bold.green(ammount_add_money.ammount_add)}" add successfully in your account now your account and your ammount became ${chalk.inverse(User_money)}`);
        
        // if (user_number.length === 11) {
            
        //     console.log(`Confirm message is successfull sended to ${ammount_add_money.number_deposite}`);
        // }
        // else{
        //     console.log(chalk.underline.red(`Please enter the correct number`));
            
        // }
        // console.log(amm_deposite.email_deposite);
        
    }
    else if(user_opt.User_opt==='Balance Enquiry/Cheak'){
        console.log(`Your Money in the bank is "${User_money}"`);
        
    }let comfirm_user = await inquirer.prompt({
        message:"Do you want to process more or EXIT",
        name:"user_choice",
        type:"list",
        choices:["Process more","EXIT","Cheak Ammount and process more", "Cheak Ammount and (EXIT)"],
    })
    
    if (comfirm_user.user_choice == "Process more") {
        console.log("You Choose Process more");
        user_loop = true;
    }
    else if(comfirm_user.user_choice == "Cheak Ammount and (EXIT)"){
        console.log(chalk.green.italic(`Your ammount left in bank is ${User_money}`));
        user_loop = false;
    }
    else if(comfirm_user.user_choice == "Cheak Ammount and process more"){
        console.log(chalk.green.italic(`Your ammount left in bank is ${User_money}`));

        
        user_loop = true;
    }
    else{
        user_loop = false;
    }
    console.log(`you choose ${comfirm_user.user_choice}`);
    comfirm_user === comfirm_user.user_choice
    // console.log(`User loop ${user_loop}`);
    
    }while(comfirm_user = user_loop)
}

else{
    console.log(chalk.red.bold(`Your pin is incorrect\nPlease enter the correct Pin`));
}


