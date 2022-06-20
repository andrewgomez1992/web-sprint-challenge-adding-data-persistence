const tasks = [
    {
        task_description: 'Deshed the dogs',
        task_notes: 'make sure to wash them after',
        task_completed: false,
        project_id: 1
    },
    {
        task_description: 'Put some work into hackerrank n whatnot',
        task_notes: 'keep on learnin man',
        task_completed: false,
        project_id: 2
    },
    {
        task_description: 'get a job!',
        task_notes: 'need some dough man',
        task_completed: false,
        project_id: 3
    },
]

exports.seed = async function (knex) {
    await knex('tasks').insert(tasks);
};