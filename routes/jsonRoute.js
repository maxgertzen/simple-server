const readFileFromDB = require('../utils/readFileFromDB')

async function jsonRoute(response) {
    try {
        let result = readFileFromDB(JSON.parse)
        response.writeHead(200, { 'content-type': 'application/json' })
        response.end(JSON.stringify(result, null, 2));
    } catch (error) {
        console.error(error)
    }
}

module.exports = jsonRoute;