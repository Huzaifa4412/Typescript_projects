import promptSync from "prompt-sync";
import inquirer from "inquirer";
import chalk from "chalk";
let loop: boolean;
const prompt = promptSync();
// Global Array that stores all tasks
let tasks: string[] = [];
// Making a function that takes input from user and add it to tasks
function addTask(): void {
  const task: string = chalk.blue(prompt("Enter task that you want to add : "));
  tasks.push(task);
  console.log(chalk.green("Task added successfully!"));
}
// Making a function that list all the tasks
function showTodos(): void {
  console.log(chalk.blue("Tasks:"));
  tasks.forEach((todo, index) => {
    console.log(chalk.redBright(`${index + 1}) ${todo}`));
  });
}
// Making a function that deletes a task
function deleteTask(): void {
  let delIndex = parseInt(
    prompt("Enter the Index number of the you want to delete : ")
  );
  tasks.splice(delIndex - 1, 1);
}

async function user_operation(callback: () => void) {
  let ask_user = await inquirer.prompt([
    {
      message: "What type of Operation you want to perform ? ",
      name: "user_chose",
      type: "list",
      choices: ["Add Task", "Show task", "Delect task"],
    },
  ]);
  if (ask_user.user_chose === "Add Task") {
    addTask();
  } else if (ask_user.user_chose === "Show task") {
    showTodos();
  } else if (ask_user.user_chose === "Delect task") {
    deleteTask();
  }
  callback();
}
async function userMore() {
  
    let ask_user1 = await inquirer.prompt({
      message: "Do you want to continue",
      type: "list",
      name: "user_chose",
      choices: ["Yes", "No"],
      default: "Yes",
    });
    if (ask_user1.user_chose === "Yes") {
      loop = true;
    } else {
      loop = false;
    }
  
}
function callback(callback: () => void) {
  do {
    callback();
  } while (loop);
}
do{callback(()=>{
  user_operation(()=>{
    userMore()
  })
})
}while(loop)