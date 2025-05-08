const {data,saveTodo} = require('./util');
const newID = Date.now();

const createTodo = ()=> {
    const newTask = {
        id_task:newID,
        libelle:"update todo",
        status: true,
        createdAt:"2025-04-25",
        updatedAt:"2025-05-01"
    };

    data.push(newTask);
    saveTodo();
    console.log(data);
}

module.exports = createTodo;