const homeRoute = require("./homeRoute");
const jsonRoute = require("./jsonRoute");
const saintsRoute = require("./saintsRoute");
const shortDescRoute = require("./shortDescRoute");
const whoRoute = require("./whoRoute");


const routes = {
    "/": homeRoute,
    "/json": jsonRoute,
    "/short-desc": shortDescRoute,
    "/saints": saintsRoute,
    "/who": whoRoute
}


function router(url, response) {
    if (url.pathname in routes) routes[url.pathname](response, url)
}

module.exports = router;