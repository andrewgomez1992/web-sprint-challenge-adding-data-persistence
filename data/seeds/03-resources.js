const resources = [
    {
        resource_name: "Number 1 resource",
        resource_description: 'number 1'
    },
    {
        resource_name: "Number 2 resource",
        resource_description: 'number 2'
    },
    {
        resource_name: "Number 3 resource",
        resource_description: 'number 3'
    },
]

exports.seed = async function (knex) {
    await knex('resources').insert(resources);
};