#! usr/bin/env node
const readTodo = require('./src/readTodo');
const args = process.argv.slice(2);

// const content = {
//     "id_task":18,
//     "libelle":"TDD",
//     "status":"done",
//     "createdAt":"2025-04-25",
//     "updatedAt":"2025-05-01"
// };

// try {
//     fs.writeFileSync(data_file,JSON.stringify([content]));
//     const data = fs.readFileSync('data.json', 'utf8');
//     console.log(data);
// } catch (err) {
//     console.error(err);
// }

const mainMenu = () => {
    switch (args[0]) {
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