const {data,saveTodo} = require('./util');

const deleteTodo = ()=> {
    let id_task = 1746704227619;
    const updatedTask = data.filter((task) => task.id_task !== id_task)
    saveTodo(updatedTask);
    console.log(`tâche n°${id_task} supprimée !!!`);
}

module.exports = deleteTodo;