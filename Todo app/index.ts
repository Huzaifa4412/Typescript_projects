// Making a todo App/list
import inquirer from 'inquirer'
console.log(`Hello coder wellcome to our app`);
let condition = undefined;
let todo_list = [];
do{
let ask_user = await inquirer.prompt([
    {
        message:"Want type of data you want to edit in your Todo app",
        name:"todo_type",
        type:"list",
        choices:["Single data", "Multiple Data"]
    }
])
if (ask_user.todo_type === "Single data"){
let todo_add_single = await inquirer.prompt([
    {
        name:"todo",
        message: "Please enter the thing that you want to add it in you TODO list",
        type:"input"
    },
    {
        message:"Are you sure you want to add this to your list",
        name:'todo_confirm',
        type:"confirm",
        default:true,
    }

])
if (todo_add_single.todo_confirm === false) {
    todo_list.pop();
    console.log(`Your todo ${todo_add_single.todo} is Canceled to your list successfully`);

}
else{
    todo_list.push(todo_add_single.todo)
    console.log(`Your todo ${todo_add_single.todo} is added to your list successfully`);
}

let user_preview = await inquirer.prompt({
    message:"Do you want to preview your list \n for no type 'no'",
    name:"todo_preview",
    type:"list",
    choices:["Yes", "No"],
    default:true,
})
if(user_preview.todo_preview == 'no' || user_preview.todo_preview == 'No'){

    console.log("Okay");
    
    
}
else{
    console.log(todo_list);
    
}
}
else if(ask_user.todo_type === "Multiple Data"){
    let todo_add_multiple = await inquirer.prompt([
        {
            name:"todo",
            message: "Please enter the thing that you want to add it in you TODO list",
            type:"input"
        },
        {
            message:"Are you sure you want to add this to your list",
            name:'todo_confirm',
            type:"confirm",
        }
    
    ])
    if (todo_add_multiple.todo_confirm === false) {
        todo_list.pop();
    console.log(`Your todo ${todo_add_multiple.todo} is Canceled to your list successfully`);

    }
    else{
    todo_list.push(todo_add_multiple.todo)
    console.log(`Your todo ${todo_add_multiple.todo} is added to your list successfully`);
    }
    let user_preview = await inquirer.prompt({
        message:"Do you want to preview your TODO list \n for no type 'no'",
        name:"todo_preview",
        type:"list",
        choices:["Yes", "No"],
        default:true,
    })
    if(user_preview.todo_preview == 'No' || user_preview.todo_preview == 'no'){
    
        console.log("Okay");
    
    }
    else{
        console.log(todo_list);
        
    }
}

else{
    console.log("Please select the type");
    
}
condition = await inquirer.prompt([
    {
        message:"Do you want to add more data in your Todo app",
        name:"todo_more",
        type:"list",
        choices:["Yes","Preview list", "No (EXIT) ",  "Preview list and (EXIT)" ]
    },
])
if (condition.todo_more === "Preview list"){ 
    console.log(todo_list);
    
}
console.log(condition.todo_more);
}while(condition.todo_more === "Yes" || condition.todo_more ==="preview list")


