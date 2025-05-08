# Traqueur des tâches

Le traqueur de tâches est un projet utilisé pour suivre et gérer vos tâches en ligne de commande .
&nbsp;
## Prescriptions

L'application doit s'exécuter à partir de la ligne de commande, accepter les actions et les entrées de l'utilisateur en tant qu'arguments, et stocker les tâches dans un fichier JSON. L'utilisateur doit pouvoir:

- [ ] Ajouter, mettre à jour et supprimer des tâches
- [ ] Marquer comme tâche en cours ou en cours
- [ ] Énumérer toutes les tâches
- [ ] Énumérer toutes les tâches qui sont effectuées
- [ ] Énumérer toutes les tâches qui ne sont pas accomplies
- [ ] Énumérer toutes les tâches en cours


### Exemple

La liste des commandes et leur utilisation est donnée ci-après:

```
# Adding a new task
task-cli add "Buy groceries"
# Output: Task added successfully (ID: 1)

# Updating and deleting tasks
task-cli update 1 "Buy groceries and cook dinner"
task-cli delete 1

# Marking a task as in progress or done
task-cli mark-in-progress 1
task-cli mark-done 1

# Listing all tasks
task-cli list

# Listing tasks by status
task-cli list done
task-cli list todo
task-cli list in-progress
```
