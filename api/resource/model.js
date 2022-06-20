const db = require("../../data/dbConfig");

function findResources() {
    return db('resources')
}

module.exports = {
    findResources
}