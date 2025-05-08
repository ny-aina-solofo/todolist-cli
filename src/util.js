const fs = require('node:fs');
const data = JSON.parse(fs.readFileSync('data.json', 'utf8'));

module.exports = {data};