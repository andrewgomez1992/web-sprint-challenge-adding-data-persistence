// build your `Project` model here
const db = require("../../data/dbConfig");

async function findProjects() {
    return db('projects')
        .then((projects) =>
            projects.map((project) => ({
                ...project,
                project_completed: project.project_completed ? true : false,
            }))
        )
        .catch(err => console.log(err.message))
}

module.exports = {
    findProjects,
};