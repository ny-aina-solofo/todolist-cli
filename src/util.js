const fs = require('node:fs');
const DATA_FILE_NAME = "data.json";
// let data = [
//     {
//         id_task : 18,
//         libelle:"read todo",
//         status: false,
//         createdAt:"2025-04-25",
//         updatedAt:"2025-05-01"
//     }
// ];

// if (!fs.existsSync(DATA_FILE_NAME)) {
//     fs.writeFileSync(DATA_FILE_NAME, JSON.stringify([]));
// }
const data = JSON.parse(fs.readFileSync(DATA_FILE_NAME, 'utf8'));

const saveTodo = (updatedTask) => {
    fs.writeFileSync(DATA_FILE_NAME, JSON.stringify(updatedTask,null,2));
};

module.exports = {
    data,
    DATA_FILE_NAME,
    saveTodo
};