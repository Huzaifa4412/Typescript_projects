
import inquirer from "inquirer";
const answer = await inquirer.prompt([
    {
        message: "Enter The First Digit",
        type: "number",
        name: "didifirst",
    },
    {
        message: "Enter The Second Digit",
        type: "number",
        name: "didisecond",
    },
    {
        message: "Enter The Operator",
        name: "operator",
        type: "list",
        choices: ["Addition", "Subtraction", "Multiplication", "Division"],
    },
]);

// conditional statement
if (answer.operator === "Addition") {
    console.log(
        `Your result is : ${answer.didifirst} + ${answer.didisecond} = ${answer.didifirst + answer.didisecond
        }`
    );
} else if (answer.operator === "Subtraction") {
    console.log(
        `Your result is : ${answer.didifirst} - ${answer.didisecond} = ${answer.didifirst - answer.didisecond
        }`
    );
} else if (answer.operator === "Multiplication") {
    console.log(
        `Your result is : ${answer.didifirst} * ${answer.didisecond} = ${answer.didifirst * answer.didisecond
        }`
    );
} else if (answer.operator === "Division") {
    console.log(
        `Your result is : ${answer.didifirst} / ${answer.didisecond} = ${answer.didifirst / answer.didisecond
        }`
    );
}
else{
    console.log(`Please Enter the Number`);
}
console.log(`Thank you for using this program ❤  😍`)
console.log(`Developed By: Huzaifa Mukhtar`);



