const projects = [
    {
        project_name: 'Finish portfolio',
        project_description: 'Add about me and remove contact page',
        project_completed: 0
    },
    {
        project_name: 'Practice Building Databases',
        project_description: 'rewatch this weeks lectures',
        project_completed: 0
    },
    {
        project_name: 'Start social media app',
        project_description: 'use create-react-app to get started',
        project_completed: 0
    },
]

exports.seed = async function (knex) {
    await knex('projects').insert(projects);
};