#!/usr/bin/env node

//** */ */ Guessing a Number game
//* importing inquirer
import inquirer from "inquirer";
// **Importing Chalk
import chalk from "chalk";
// ** Initializing Point for whole Project
let user_point = 0;
//! Level 01
console.log(`Wellcome to Level 01 (Easy)`);
console.log(
  chalk.white.yellow(
    `You have Three (3) chances \n You must have to Guess 1 correct number to complete the level`
  )
);

//! For loop for level 01
for (let i = 1; i <= 3; i++) {
  let chances = 3;
  console.log(
    chalk.red(`Your chances left ${chances - i} Your chance taken ${i}`)
  );

  //? code to get ramdom number between 1 - 5
  // let compgues = Math.floor(Math.random() * 5 + 1);
  //? Cheaking purpose only
  let compgues = 2;
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
      console.log(chalk.red.bold.inverse("Congratulation ") + "You Won");
      console.log(
        `Computer number is: ${compgues} and your number is: ${answer.userguess}`
      );
      user_point += 1;
    } else if (
      answer.userguess + 1 == compgues ||
      answer.userguess - 1 == compgues
    ) {
      console.log(chalk.yellow("Number is Very close to computer number"));
      console.log(
        chalk.bgRed.white(
          `Computer number is:  ${compgues} and your number is:  ${answer.userguess}`
        )
      );
      console.log(`"You just loose by 1 number"`);
      //? You can you this if you want to motivate user
      //// console.log("You were close to it champ");
      //// console.log("Keep it up Legent you can do it");
    } else {
      if (answer.userguess < compgues) {
        console.log(chalk.yellow.italic("Number is Less than computer number"));

        console.log(
          `Computer number is:  ${compgues} and your number is:  ${answer.userguess}`
        );

        //? You can you this if you want to motivate user
        //// console.log("Not a big Deal you have Power to achieve it ");
        //// console.log("Keep it up Legent you can do it");
      } else if (answer.userguess > compgues) {
        console.log(chalk.yellow.italic("Number is greater than computer number"));
        console.log(
          `Computer number is:  ${compgues} and your number is:  ${answer.userguess}`
        );
        //? You can you this if you want to motivate user
        ////  console.log("Not a big Deal you have Power to achieve it ");
        ////  console.log("Keep it up Legent you can do it");
      }
    }
  } else {
    console.log("Please Enter the Number 1 - 5 you are on level one ");
  }
  console.log(chalk.bold.red.underline(`Your points for Level 01 is ${user_point*5}`));
  
}
if (user_point >= 1) {
  //! Level 02
  console.log(`Wellcome to Level 02 (Medium)`  );
  console.log(
    chalk.white.yellow(
      `You have Five (5) chances \nYou must have to Guess any 3 correct number to complete the level 2`
    )
  );

  //! For loop for level 02
  for (let i = 1; i <= 5; i++) {
    let chances = 5;
    console.log(
      chalk.red(`Your chances left ${chances - i} Your chance taken ${i}`)
    );
  
    //? code to get ramdom number between 1 - 7
    // let compgues = Math.floor(Math.random() * 7 + 1);
    //? Cheaking purpose only
    let compgues = 3;
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
        console.log(chalk.bold.inverse("Congratulation ") + "You Won");
        console.log(
          `Computer number is: ${compgues} and your number is: ${answer.userguess}`
        );
        user_point += 1;
      } else if (
        answer.userguess + 1 == compgues ||
        answer.userguess - 1 == compgues
      ) {
        console.log(chalk.yellow("Number is Very close to computer number"));
        console.log(
          chalk.bgRed.white(
            `Computer number is:  ${compgues} and your number is:  ${answer.userguess}`
          )
        );
        console.log(`"You just loose by 1 number"`);
        //? You can you this if you want to motivate user
        //// console.log("You were close to it champ");
        //// console.log("Keep it up Legent you can do it");
      } else {
        if (answer.userguess < compgues) {
          console.log(chalk.yellow.italic("Number is Less than computer number"));
  
          console.log(
            `Computer number is:  ${compgues} and your number is:  ${answer.userguess}`
          );
  
          //? You can you this if you want to motivate user
          //// console.log("Not a big Deal you have Power to achieve it ");
          //// console.log("Keep it up Legent you can do it");
        } else if (answer.userguess > compgues) {
          console.log(chalk.yellow.italic("Number is greater than computer number"));
          console.log(
            `Computer number is:  ${compgues} and your number is:  ${answer.userguess}`
          );
          //? You can you this if you want to motivate user
          ////  console.log("Not a big Deal you have Power to achieve it ");
          ////  console.log("Keep it up Legent you can do it");
        }
      }
    } else {
      console.log("Please Enter the Number 1 - 7 you are on level one Your one change deducted");
    }
    console.log(chalk.bold.red.underline(`Your Total points ${user_point*5}`));
    
  }
} else {
  console.log(
    chalk.red.underline.bold(
      `Unfortunatily you can't go to above level to because you don't Guess any correct number`
    )
  );
}
if (user_point>=4) {
  console.log(`Wellcome to level 3 the final and the hardest`);
  
}
console.log(chalk.bgRed.white(`Thank you for using this program`));
console.log(`Developed By: Huzaifa Mukhtar`);
