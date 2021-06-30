const readFileFromDB = require("../utils/readFileFromDB");

async function whoRoute(response, pathURL) {
    try {
        let query = pathURL.searchParams.get('name')
        let result = readFileFromDB(data => JSON.parse(data).find(char => char.name.toLowerCase() === query.toLowerCase()))
        response.writeHead(200, { 'content-type': 'application/json' })
        response.end(result ? JSON.stringify(result, null, 2) : 'No such customer');
    } catch (error) {
        console.error(error)
    }
}

module.exports = whoRoute