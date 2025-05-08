const {data,saveTodo} = require('./util');

const updateTodo = (args_1,args_2)=> {
    const id_task = parseInt(args_1);
    let newLibelle = args_2;
    const updatedTask = data.map((task) => task.id_task !== id_task ? task : {...task,libelle : newLibelle})
    saveTodo(updatedTask);
    console.log(`Nom du tâche modifié avec succès (ID : ${id_task})`);
}

module.exports = updateTodo;