// build your `Task` model here
const db = require('../../data/dbConfig')

async function find() {
    const results = await db('tasks as t')
        .join('projects as p', 't.project_id', 'p.project_id')
        .select('task_id', 'task_description',
            'task_notes', 'task_completed',
            'project_name', 'project_description');

    const tasks = results.map(task => ({
        ...task,
        task_completed: task.task_completed ? true : false
    }));

    return tasks;
}

function insert(task) {
    return db('tasks')
        .insert(task)
        .then(ids => {
            return db('tasks')
                .where('task_id', ids[0])
                .join('projects', 'projects.project_id', '=', 'tasks.project_id')
                .first();
        })
}




module.exports = {
    find,
    insert
}