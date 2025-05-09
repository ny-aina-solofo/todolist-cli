const displayHelp = () => {
    const help = `
        Usage: todolist [options]

        Options:
        help                     Affiche le support d'aide
        add [libelle]            Ajoute une tâche avec un libelle
        update [id] [libelle]    Met à jour le libelle d'une tâche avec l'id correspondant
        delete [id]              Supprime une tâche 
        list                     Liste tous les tâches
        list [filter]            Liste les tâches selon un filtre : todo, done, in-progress
        mark-as-done             Marque une tâche en "as done"
        mark-in-progress         Marque une tâche en "in progress"
    ` 
    console.log(help);
    return help;
}
module.exports = displayHelp;