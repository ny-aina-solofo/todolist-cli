const fs = require('node:fs');

const main = () => {
    const content = {
        "id_task":18,
        "libelle":"TDD",
        "status":"done",
        "createdAt":"2025-04-25",
        "updatedAt":"2025-05-01"
    };
    try {
        fs.writeFileSync('data.json',JSON.stringify([content]));
        const data = fs.readFileSync('data.json', 'utf8');
        console.log(data);
    } catch (err) {
        console.error(err);
    }
}

main()