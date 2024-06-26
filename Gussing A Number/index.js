#!/usr/bin/env node
//** */ */ Guessing a Number game
//* importing inquirer
import inquirer from "inquirer";
// **Importing Chalk
import chalk from "chalk";
// ** Initializing Point for whole Project
let user_point = 0;
let badge = undefined;
console.log(chalk.inverse(`Hello Player wellcome to world Hardest game`));
console.log(chalk.blue(`This game contain three levels\n1)Easy 2)Medium 3)Hard\nIf you pass level 1 you achieve Bronze medal, if you pass 2 and 3 level you achieve Silver and Gold badges respectively`));
//! Level 01
console.log(`Wellcome to Level 01 (Easy) If you pass it you got Bronze badge`);
console.log(chalk.white.yellow(`You have Three (3) chances \n You must have to Guess 1 correct number  and to achieve minimum 5 points to complete the level 01 (Easy)`));
//! For loop for level 01
for (let i = 1; i <= 3; i++) {
    let chances = 3;
    console.log(chalk.red(`Your chances left ${chances - i} Your chance taken ${i}`));
    //? code to get ramdom number between 1 - 5
    let compgues = Math.floor(Math.random() * 5 + 1);
    //? Cheaking purpose only
    // let compgues = 2;
    //? Taking input from user
    let answer = await inquirer.prompt([
        {
            message: "Enter a number between 1 to 5",
            type: "number",
            name: "userguess",
        },
    ]);
    if (answer.userguess >= 1 && answer.userguess <= 5) {
        console.log("You type: " + answer.userguess);
        if (answer.userguess === compgues) {
            console.log(chalk.inverse.bold("Congratulation ") + "You Won");
            console.log(`Computer number is: ${compgues} and your number is: ${answer.userguess}`);
            user_point += 1;
        }
        else if (answer.userguess + 1 == compgues ||
            answer.userguess - 1 == compgues) {
            console.log(chalk.yellow("Number is Very close to computer number"));
            console.log(chalk.bgRed.white(`Computer number is:  ${compgues} and your number is:  ${answer.userguess}`));
            console.log(`"You just loose by 1 number"`);
            //? You can you this if you want to motivate user
            //// console.log("You were close to it champ");
            //// console.log("Keep it up Legent you can do it");
        }
        else {
            if (answer.userguess < compgues) {
                console.log(chalk.yellow.italic("Number is Less than computer number"));
                console.log(`Computer number is:  ${compgues} and your number is:  ${answer.userguess}`);
                //? You can you this if you want to motivate user
                //// console.log("Not a big Deal you have Power to achieve it ");
                //// console.log("Keep it up Legent you can do it");
            }
            else if (answer.userguess > compgues) {
                console.log(chalk.yellow.italic("Number is greater than computer number"));
                console.log(`Computer number is:  ${compgues} and your number is:  ${answer.userguess}`);
                //? You can you this if you want to motivate user
                ////  console.log("Not a big Deal you have Power to achieve it ");
                ////  console.log("Keep it up Legent you can do it");
            }
        }
    }
    else {
        console.log("Please Enter the Number 1 - 5 You one chance was deducted");
    }
    console.log(chalk.bold.red.underline(`Your points for Level 01 is ${user_point * 5}`));
    badge = "Bronze";
}
if (user_point >= 1) {
    console.log(chalk.bold.inverse.underline(`Congratulation Champ for Completing level 01 with ${user_point * 5}`));
    badge = 'Silver';
    //! Level 02
    console.log(`Wellcome Champ to the  level 02 of our game You can got Silver Badge if you pass this level`);
    console.log(chalk.white.yellow(`You have Five (5) chances \nYou must have to Guess any 3 correct number achive 20 points and to complete the level 2`));
    //! For loop for level 02
    for (let i = 1; i <= 5; i++) {
        let chances = 5;
        console.log(chalk.red(`Your chances left ${chances - i} Your chance taken ${i}`));
        //? code to get ramdom number between 1 - 7
        let compgues = Math.floor(Math.random() * 7 + 1);
        //? Cheaking purpose only
        // let compgues = 3;
        //? Taking input from user
        let answer = await inquirer.prompt([
            {
                message: "Enter a number between 1 to 7",
                type: "number",
                name: "userguess",
            },
        ]);
        if (answer.userguess >= 1 && answer.userguess <= 7) {
            console.log("You type: " + answer.userguess);
            if (answer.userguess === compgues) {
                console.log(chalk.inverse.bold("Congratulation ") + "You Won");
                console.log(`Computer number is: ${compgues} and your number is: ${answer.userguess}`);
                user_point += 1;
            }
            else if (answer.userguess + 1 == compgues ||
                answer.userguess - 1 == compgues) {
                console.log(chalk.yellow("Number is Very close to computer number"));
                console.log(chalk.bgRed.white(`Computer number is:  ${compgues} and your number is:  ${answer.userguess}`));
                console.log(`"You just loose by 1 number"`);
                //? You can you this if you want to motivate user
                //// console.log("You were close to it champ");
                //// console.log("Keep it up Legent you can do it");
            }
            else {
                if (answer.userguess < compgues) {
                    console.log(chalk.yellow.italic("Number is Less than computer number"));
                    console.log(`Computer number is:  ${compgues} and your number is:  ${answer.userguess}`);
                    //? You can you this if you want to motivate user
                    //// console.log("Not a big Deal you have Power to achieve it ");
                    //// console.log("Keep it up Legent you can do it");
                }
                else if (answer.userguess > compgues) {
                    console.log(chalk.yellow.italic("Number is greater than computer number"));
                    console.log(`Computer number is:  ${compgues} and your number is:  ${answer.userguess}`);
                    //? You can you this if you want to motivate user
                    ////  console.log("Not a big Deal you have Power to achieve it ");
                    ////  console.log("Keep it up Legent you can do it");
                }
            }
        }
        else {
            console.log("Please Enter the Number 1 - 7 Your one change was deducted");
        }
        console.log(chalk.bold.red.underline(`Your Total points ${user_point * 5}`));
        console.log(chalk.blue(`You have the ability to cross level 02`));
    }
}
else {
    console.log(chalk.red.underline.bold(`Unfortunatily you can't go to above level to because your Points are less then 20 Guess any correct number`));
}
if (user_point >= 4) {
    console.log(`Wellcome Champ to the Hardest level of our game if you be able to pass it you goona to bhe world best Player and You can got Gold Badge`);
    if (user_point >= 4) {
        //! Level 03
        console.log(chalk.bold.inverse.underline(`Congratulation Champ for Completing level 03 with ${user_point * 5}`));
        console.log(`Wellcome Champ to the  level 03 of our game You can got Gold Badge`);
        console.log(chalk.white.yellow(`You have Five (7) chances \nYou must have to Guess any 5 correct number achive 40+ points and to complete the level 3 `));
        //! For loop for level 03
        for (let i = 1; i <= 5; i++) {
            let chances = 7;
            console.log(chalk.red(`Your chances left ${chances - i} Your chance taken ${i}`));
            //? code to get ramdom number between 1 - 10
            let compgues = Math.floor(Math.random() * 10 + 1);
            //? Cheaking purpose only
            // let compgues = 4;
            //? Taking input from user
            let answer = await inquirer.prompt([
                {
                    message: "Enter a number between 1 to 10",
                    type: "number",
                    name: "userguess",
                },
            ]);
            if (answer.userguess >= 1 && answer.userguess <= 10) {
                console.log("You type: " + answer.userguess);
                if (answer.userguess === compgues) {
                    console.log(chalk.inverse.bold("Congratulation ") + "You Won");
                    console.log(`Computer number is: ${compgues} and your number is: ${answer.userguess}`);
                    user_point += 1;
                }
                else if (answer.userguess + 1 == compgues ||
                    answer.userguess - 1 == compgues) {
                    console.log(chalk.yellow("Number is Very close to computer number"));
                    console.log(chalk.bgRed.white(`Computer number is:  ${compgues} and your number is:  ${answer.userguess}`));
                    console.log(`"You just loose by 1 number"`);
                    //? You can you this if you want to motivate user
                    //// console.log("You were close to it champ");
                    //// console.log("Keep it up Legent you can do it");
                }
                else {
                    if (answer.userguess < compgues) {
                        console.log(chalk.yellow.italic("Number is Less than computer number"));
                        console.log(`Computer number is:  ${compgues} and your number is:  ${answer.userguess}`);
                        //? You can you this if you want to motivate user
                        //// console.log("Not a big Deal you have Power to achieve it ");
                        //// console.log("Keep it up Legent you can do it");
                    }
                    else if (answer.userguess > compgues) {
                        console.log(chalk.yellow.italic("Number is greater than computer number"));
                        console.log(`Computer number is:  ${compgues} and your number is:  ${answer.userguess}`);
                        //? You can you this if you want to motivate user
                        ////  console.log("Not a big Deal you have Power to achieve it ");
                        ////  console.log("Keep it up Legent you can do it");
                    }
                }
            }
            else {
                console.log("Please Enter the Number 1 - 10 Your one change was deducted");
            }
            console.log(chalk.bold.red.underline(`Your Total points ${user_point * 5}`));
            console.log(chalk.bold.inverse.underline(`Congratulation Champ for Completing level 02 with ${user_point * 5}`));
        }
        badge = 'Gold';
    }
    else {
        console.log(chalk.red.underline.bold('Congratulation champ for coming ap world hardest level Bestter luck next time Champ '));
    }
    console.log(chalk.blue.bgWhite.underline(`Oooo my God i can't Believe this you pass our World Hardest games Champ You are the Best player of our game`));
    console.log(chalk.inverse("Well done Champ"));
}
console.log(`You got ${badge} Badge`);
console.log(chalk.bgRed.white(`Thank you for using this program`));
console.log(`Developed By: Huzaifa Mukhtar`);
