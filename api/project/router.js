// build your `/api/projects` router here
const express = require("express");
const Project = require("./model");

const router = express.Router();

router.get("/", (req, res, next) => {
    Project.findProjects()
        .then(projects => {
            res.json(projects)
        })
        .catch(next)
});

router.post('/', (req, res, next) => {
    Project.insertProject(req.body)
        .then(newProject => {
            res.status(201).json(newProject[0])
        })
        .catch(next)
})

module.exports = router;