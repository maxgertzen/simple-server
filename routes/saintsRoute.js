const readFileFromDB = require('../utils/readFileFromDB');

async function saintsRoute(response, pathURL) {
    try {
        let query = pathURL.searchParams.get('isSaint');
        let saints = readFileFromDB((data) => {
            let res = JSON.parse(data).filter(obj => {
                return query === "false" ? obj.occupation.isSaint === false : obj.occupation.isSaint === true
            });
            return res
        })
        response.writeHead(200, { 'content-type': 'application/json' })
        response.end(JSON.stringify(saints, null, 2));
    } catch (error) {
        console.error(error)
    }
}

module.exports = saintsRoute;