exports.up = async function (knex) {
    await knex.schema

        .createTable("projects", (tbl) => {
            tbl.increments("project_id");
            tbl.string("project_name").notNullable();
            tbl.string("project_description");
            tbl.boolean("project_completed").notNullable().defaultTo(0);
        })
};

exports.down = function (knex) {
    return knex.schema
        .dropTableIfExists("project_resources")
        .dropTableIfExists("tasks")
        .dropTableIfExists("resources")
        .dropTableIfExists("projects");
};