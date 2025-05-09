#!/usr/bin/env node
const createTodo = require('./src/createTodo');
const deleteTodo = require('./src/deleteTodo');
const displayHelp = require('./src/displayHelp');
const readTodo = require('./src/readTodo');
const updateStatus = require('./src/updateStatus');
const updateTodo = require('./src/updateTodo');

const args = process.argv.slice(2);

const mainMenu = () => {
    switch (args[0]) {
        case "add":
            if(args.length < 2) {
                console.log(" Un libelle vide n'est pas accepté.");
                process.exit(1);
            }
            createTodo(args[1]);
            break;
        case "list":
            if(args.length === 1) {
                readTodo(null);
            } else {
                readTodo(args[1]);
            } 
            break;
        case "delete":
            if(args.length < 2) {
                console.log("Le Variable requis n'est pas fournnis.");
                process.exit(1);
            }
            deleteTodo(args[1]);
            break;
        case "update":
            if(args.length < 3) {
                console.log("Vous devez fournir un id et un libelle à mettre à jour.");
                process.exit(1);
            }
            updateTodo(args[1], args[2]);
            break;
        case "mark-as-done":
            if(args.length < 2) {
                console.log("Vous devez fournir un id à mettre à jour.");
                process.exit(1);
            }
            updateStatus.markAsDone(args[1]);
            break;
        case "mark-in-progress":
            if(args.length < 2) {
                console.log("Vous devez fournir un id à mettre à jour.");
                process.exit(1);
            }
            updateStatus.markInProgress(args[1]);
            break;
        case "help":
            displayHelp();
            break;
        default:
            console.log("Usage incorrecte");
            displayHelp();
            break;
    }
}

mainMenu();