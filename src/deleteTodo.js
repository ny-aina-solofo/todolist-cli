const {data,saveTodo} = require('./util');

const deleteTodo = (args)=> {
    const id_task = parseInt(args);
    const updatedTask = data.filter((task) => task.id_task !== id_task)
    saveTodo(updatedTask);
    console.log(`Task deleted successfully (ID : ${id_task})`);
}

module.exports = deleteTodo;