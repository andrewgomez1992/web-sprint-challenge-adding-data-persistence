const projects = [
    {
        project_name: 'Finish portfolio',
        project_description: 'Add about me and remove contact page',
        project_completed: false
    },
    {
        project_name: 'Practice Building Databases',
        project_description: 'rewatch this weeks lectures',
        project_completed: false
    },
    {
        project_name: 'Start social media app',
        project_description: 'use create-react-app to get started',
        project_completed: false
    },
]

exports.seed = async function (knex) {
    await knex('projects').insert(projects);
};