const {data,DATA_FILE_NAME} = require('./util');
const newID = Date.now();
const fs = require('node:fs');

const createTodo = ()=> {
    const newTask = {
        id_task:newID,
        libelle:"slepp",
        status: false,
        createdAt:"2025-04-25",
        updatedAt:"2025-05-01"
    };
    data.push(newTask)
    fs.writeFileSync(DATA_FILE_NAME, JSON.stringify(data,null,2));
    console.log(`tâche ajouté : ${newTask.libelle}`);
}

module.exports = createTodo;