const db = require("../../data/dbConfig");

function findProjects() {
    return db('projects')
        .then((projects) =>
            projects.map((project) => ({
                ...project,
                project_completed: project.project_completed ? true : false,
            }))
        )
        .catch(err => console.log(err.message))
}

// was running into bug using function
const insert = (project) => {
    return db('projects')
        .insert(project, 'project_id')
        .then(([project_id]) => db('projects').where({ project_id }))
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
    insert
};