import inquirer from "inquirer";
import chalk from "chalk";
import PromptSync from "prompt-sync";
const prompt = PromptSync();
const todos: Array<string> = [];
// !  Function to view todo list
function viewTodos() {
  console.log(chalk.greenBright("Your Todo List : "));
  todos.forEach((todo, index) => {
    console.log(`${index + 1}. ${todo}`);
  });
  user_operation();
}
//  ! Function to Add todos
function addTodos() {
  let add = chalk.blue(prompt(chalk.blueBright("Enter the Todo that you want to add : ")));
  todos.push(add);
  user_operation();
}

// ! Function to update todos
function updateTodos() {
  let update = parseInt(
   prompt(`Enter the Todo ${chalk.blueBright("index")} number that you want to update : `)
  );
  let index = update - 1;
  todos[index] = chalk.blueBright(prompt("Enter the new Todo : "));
  user_operation();
}
// ! Function to delect todos
function delectTodos() {
  let del = parseInt(
    prompt("Enter the Todo index number that you want to delete : ")
  );
  todos.splice(del - 1, 1);
  user_operation();
}
// ! Function to exit to app
function exit() {
  console.log(chalk.greenBright("Bye Bye"));
}
// ! Function to operate all todos
async function user_operation() {
  let ask_user = await inquirer.prompt({
    type: "list",
    name: "operation",
    message: "Select the operation that you want to perform : ",
    choices: ["Add Todo", "View Todo", "Update Todo", "Delete Todo", "Exit"],
  });
  if (ask_user.operation === "Add Todo") {
    addTodos();
  } else if (ask_user.operation === "View Todo") {
    viewTodos();
  } else if (ask_user.operation === "Update Todo") {
    updateTodos();
  } else if (ask_user.operation === "Delete Todo") {
    delectTodos();
  } else if (ask_user.operation === "Exit") {
    exit();
  }
}
// Calling all functions
// user_operation()
// addTodos()
// addTodos()
// viewTodos()
// updateTodos()
// delectTodos()
// viewTodos()
user_operation();
