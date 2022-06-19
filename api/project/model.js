// build your `Project` model here
const db = require("../../data/dbConfig");

async function findProjects() {
    let results = await db("projects")
    return results;
}

module.exports = {
    findProjects,
};