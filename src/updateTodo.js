const {data,saveTodo} = require('./util');

const updateTodo = ()=> {
    let id_task = 1746704288207;
    let newLibelle = "sleeping";
    const updatedTask = data.map((task) => task.id_task !== id_task ? task : {...task,libelle : newLibelle})
    saveTodo(updatedTask);
    console.log(`tâche n°${id_task} modifiée !!!`);
}

module.exports = updateTodo;