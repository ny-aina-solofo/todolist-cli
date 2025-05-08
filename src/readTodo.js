const {data} = require('./util');

const readTodo = (args)=>{
    switch (args) {
        case null:
            for (const key in data) {
                if (Object.keys(data).length > 0) {
                    console.log("id: " + data[key].id_task + " description: " + data[key].libelle +
                        " status: " + data[key].status + " createdDate: " + data[key].createdAt);
                }
            }
            break;
        case 'todo':
            for (const key in data) {
                if (Object.keys(data).length > 0 && data[key].status === "todo") {
                    console.log("id: " + data[key].id_task + " description: " + data[key].libelle +
                        " status: " + data[key].status + " createdDate: " + data[key].createdAt);
                }
            }
            break;
        case 'done':
            for (const key in data) {
                if (Object.keys(data).length > 0 && data[key].status === "done") {
                    console.log("id: " + data[key].id_task + " description: " + data[key].libelle +
                        " status: " + data[key].status + " createdDate: " + data[key].createdAt);
                }
            }
            break;
        case 'in-progress':
            for (const key in data) {
                if (Object.keys(data).length > 0 && data[key].status === "in-progress") {
                    console.log("id: " + data[key].id_task + " description: " + data[key].libelle +
                        " status: " + data[key].status + " createdDate: " + data[key].createdAt);
                }
            }
            break;
        default:
            console.log("Invalid status provided. Valid status: todo, in-progress and done.");
            break;
    }
}

module.exports = readTodo;