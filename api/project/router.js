// build your `/api/projects` router here
const express = require("express");
const Projects = require("./model");

const router = express.Router();

router.get("/", async (req, res, next) => {
    const projects = await Projects.findProjects()
    res.json(projects)
});

router.post('/', async (req, res, next) => {
    const project = req.body
    const newProject = await Projects.insert(project)
    res.json(newProject)
})

module.exports = router;