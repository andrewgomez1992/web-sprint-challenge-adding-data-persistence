const db = require("../../data/dbConfig");

function findResources() {
    return db('resources')
}

function insertResource(resource) {
    return db('resources')
        .insertResource(resource)
}

module.exports = {
    findResources,
    insertResource
}