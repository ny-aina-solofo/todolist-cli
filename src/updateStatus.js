const {data,saveTodo} = require('./util');

const markAsDone = (args_1)=> {
    const id_task = parseInt(args_1);
    const updatedTask = data.map((task) => task.id_task !== id_task ? task : {...task,status : "done"})
    saveTodo(updatedTask);
    console.log(`Statut modifié avec succès (ID : ${id_task})`);
}
const markInProgress = (args_1)=> {
    const id_task = parseInt(args_1);
    const updatedTask = data.map((task) => task.id_task !== id_task ? task : {...task,status : "in-progress"})
    saveTodo(updatedTask);
    console.log(`Statut modifié avec succès (ID : ${id_task})`);
}

module.exports = {markAsDone,markInProgress};