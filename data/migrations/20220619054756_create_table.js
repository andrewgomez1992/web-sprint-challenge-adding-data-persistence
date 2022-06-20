exports.up = async function (knex) {
    await knex.schema

        .createTable("projects", (tbl) => {
            tbl.increments("project_id");
            tbl.string("project_name").notNullable();
            tbl.string("project_description");
            tbl.boolean("project_completed").notNullable().defaultTo(0);
        })

        .createTable('tasks', (tbl) => {
            tbl.increments('task_id')
            tbl.string('task_description', 128).notNullable()
            tbl.text('task_notes')
            tbl.boolean('task_completed').notNullable()
            tbl.integer('project_id')
                .unsigned()
                .notNullable()
                .references('project_id')
                .inTable('projects')
                .onDelete('CASCADE')
                .onUpdate('CASCADE')
        })
};

exports.down = function (knex) {
    return knex.schema
        // .dropTableIfExists("project_resources")
        .dropTableIfExists("tasks")
        // .dropTableIfExists("resources")
        .dropTableIfExists("projects");
};