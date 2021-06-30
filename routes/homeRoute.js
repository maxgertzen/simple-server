// '/'
async function homeRoute(response) {
    try {
        response.writeHead(200, { 'content-type': 'text/html' });
        response.end('<h1>Ahalan</h1> You can fetch some json by navigating to <a href="/json">/json</a>')
    } catch (error) {
        console.error(error)
    }
}

module.exports = homeRoute;