#! usr/bin/env node
const createTodo = require('./src/createTodo');
const deleteTodo = require('./src/deleteTodo');
const readTodo = require('./src/readTodo');
const updateTodo = require('./src/updateTodo');

const args = process.argv.slice(2);

const mainMenu = () => {
    switch (args[0]) {
        case "add":
            if(args.length < 2) {
                console.log("Empty description not accepted.");
                process.exit(1);
            }
            createTodo(args[1]);
            break;
        case "list":
            readTodo();
            break;
        case "delete":
            if(args.length < 2) {
                console.log("Required variable id not provided.");
                process.exit(1);
            }
            deleteTodo(args[1]);
            break;
        case "update":
            if(args.length < 3) {
                console.log("Provide both id and description to be updated.");
                process.exit(1);
            }
            updateTodo(args[1], args[2]);
            break;
        case "status":
            if(args.length < 3) {
                console.log("Provide both id and description to be updated.");
                process.exit(1);
            }
            updateStatus(args[1], args[2]);
            break;
        case "help":
            displayHelp();
            break;
        default:
            console.log("Incorrect usage");
            displayHelp();
            break;
    }
}

const displayHelp = () => {
    console.log(`
        Usage: todolist [options]

        Options:
        help                  Show help information
        add [desc]            Adds task with provided description
        update [id] [desc]    Updates the description of the task with corresponding id
        delete [id]           Deletes the task with the provided task id
  `);
}

mainMenu();