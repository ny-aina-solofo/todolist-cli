const displayHelp = () => {
    const help = `
        Usage: todolist [options]

        Options:
        help                     Show help information
        add [libelle]            Adds task with provided description
        update [id] [libelle]    Updates the description of the task with corresponding id
        delete [id]              Deletes the task with the provided task id
        list                     List all task
        list [filter]            List task with a filtre : todo, done, in-progress
        mark-as-done             Mark task status as done
        mark-in-progress         Mark task status in progress
    ` 
    console.log(help);
    return help;
}
 module.exports = displayHelp;