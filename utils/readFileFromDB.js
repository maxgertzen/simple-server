const db = './files/customers.json';
const fs = require('fs')

function readFileFromDB(func) {
    try {
        let result;
        fs.readFile(db, 'utf-8', (err, data) => {
            console.log('GETS HERE')
            if (err) throw err
            result = func(data);
        })
        return result

    } catch (error) {
        console.error(error)
    }
}

module.exports = readFileFromDB;