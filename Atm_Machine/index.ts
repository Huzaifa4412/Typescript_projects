import inquirer from 'inquirer'
console.log(`Wellcome to our Atm machine`);
const pin = 4412;
const User_money = 25000;
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
do{
if (pin===confirm_pin.User_pin_confirm) {
    console.log(`Your pin is correct`);
    let user_opt = await inquirer.prompt([
        {
            message: "What you want to do\nSelect your option",
            name: `User_opt`,
            type:'list',
            choices:['Withdraw','Deposite','Balance Enquiry/Cheak']
        },
    ])
    if (user_opt.User_opt==='Withdraw') {
        console.log(`Your Money on Bank is ${User_money}`);
        let withdraw_money = await inquirer.prompt({
            message: "Enter the ammount of money that you want to withdraw from your account",
            name: `withdraw_money`,
            type: 'number',
        })
        if (withdraw_money.withdraw_money <= User_money) {
            console.log(`Your Money left in the bank is ${User_money - withdraw_money.withdraw_money}`);
        }
        else{
            console.log(`You don't have enough money in your account`);
            
        }

    }
    else if (user_opt === 'Deposite') {
        let amm_deposite = await inquirer.prompt([{
            message:"How much ammount you want to Deposite",
            name:"ammount_deposite",
            type:'number'
        },
        {
            message:'Enter you Number for reciving message',
            name:"email_deposite",
            type:'input'
        }
    ])
        console.log(`Your ${amm_deposite} is `);
        console.log(`Confirm message is successfull sended to ${amm_deposite.email_deposite}`);
        
    }
    else if(user_opt.User_opt==='Balance Enquiry/Cheak'){
        console.log(`Your Money in the bank is "${User_money}"`);
        
    }
}
else{
    console.log(`Your pin is incorrect\nPlease enter the correct Pin`);
}

let comfirm_user = await inquirer.prompt({
    message:"Do you want to process more or EXIT",
    name:"user_choice",
    type:"list",
    choices:["Process more","EXIT"],
})

if (comfirm_user.user_choice == "Process more") {
    console.log("You Choose Process more");
    user_loop = true;
}
console.log(`you choose ${comfirm_user.user_choice}`);
comfirm_user === comfirm_user.user_choice
console.log(`User loop ${user_loop}`);

}while(comfirm_user = user_loop)
