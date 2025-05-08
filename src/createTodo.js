const {data,DATA_FILE_NAME} = require('./util');
const fs = require('node:fs');

let newId = data.length + 1;

const createTodo = (args)=> {
    const currentDate = new Date();
    const newTask = {
        id_task : newId,
        libelle : args,
        status : "todo",
        createdAt : currentDate,
        updatedAt : currentDate
    };
    data.push(newTask);
    fs.writeFileSync(DATA_FILE_NAME, JSON.stringify(data,null,2));
    console.log(`Tâche ajoutée avec succès (ID : ${newTask.id_task})`);
}

module.exports = createTodo;