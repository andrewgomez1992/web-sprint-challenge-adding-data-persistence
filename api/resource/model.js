const db = require("../../data/dbConfig");

function findResources() {
    return db('resources')
}

async function insertResource(resource) {
    const [resource_id] = await db('resources').insert(resource);
    return findResources().where({ resource_id }).first();
}

module.exports = {
    findResources,
    insertResource
}