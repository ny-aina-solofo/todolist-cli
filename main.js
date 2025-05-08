#! usr/bin/env node
const createTodo = require('./src/createTodo');
const readTodo = require('./src/readTodo');
const args = process.argv.slice(2);


const mainMenu = () => {
    switch (args[0]) {
        case "add":
            createTodo();
            break;
        case "list":
            readTodo();
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