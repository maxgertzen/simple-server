process.env.PORT = 3100;

const http = require('http');
const router = require('./routes/router');

http.createServer(async (request, response) => {
    let path = new URL(request.url, `http://${request.headers.host}`);
    router(path, response);

}).listen(process.env.PORT, () => {
    console.log(`Listening on port ${process.env.PORT}`);
    console.log(`go to localhost:${process.env.PORT} or localhost:${process.env.PORT}/json`);
});