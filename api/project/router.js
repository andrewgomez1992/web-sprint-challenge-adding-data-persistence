// build your `/api/projects` router here
const express = require("express");
const Projects = require("./model");

const router = express.Router();

router.get("/", (req, res, next) => {
    Projects.findProjects()
        .then(projects => {
            res.json(projects)
        })
        .catch(next)
});

router.post('/', (req, res, next) => {
    Projects.insert(req.body)
        .then(newProject => {
            res.status(201).json(newProject[0])
        })
        .catch(err => {
            res.status(500).json({ message: "Failed to create a project!" })
        })
})

module.exports = router;