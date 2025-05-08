const {data} = require('./util');

const readTodo = ()=>{
    for (const key in data) {
        if (Object.keys(data).length > 0) {
            console.log("id: " + data[key].id_task + " description: " + data[key].libelle +
                " status: " + data[key].status + " createdDate: " + data[key].createdAt);
        }
    }
}

module.exports = readTodo;