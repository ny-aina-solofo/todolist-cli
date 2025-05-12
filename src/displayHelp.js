const displayHelp = () => {
    const help = `
        Usage: todolist [options]

        Options:
        help                     Show help information
        add [libelle]            Adds task with provided libelle
        update [id] [libelle]    Updates the libelle of the task with corresponding id
        delete [id]              Deletes task with the provided id 
        list                     list all task
        list [filter]            filter task list : todo, done, in-progress
        mark-as-done             mark task as done
        mark-in-progress         mark task as in-progress
    ` 
    console.log(help);
    return help;
}
module.exports = displayHelp;