const readFileFromDB = require('../utils/readFileFromDB');

async function shortDescRoute(response) {
    try {
        let shortDesc = '<table><thead><tr><th>Name</th><th>Occupation</th></tr></thead><tbody>';
        let content = readFileFromDB((data) => {
            let buildTableData = JSON.parse(data).map(customer => `<tr><td>${customer.name}</td><td>${customer.occupation.name}</td></tr>`);
            buildTableData = buildTableData.join('')
            return `${buildTableData}</tbody></table>`
        })
        response.writeHead(200, { 'content-type': 'text/html' })
        response.end(`${shortDesc}${content}`)
    } catch (error) {
        console.error(error)
    }
}

module.exports = shortDescRoute