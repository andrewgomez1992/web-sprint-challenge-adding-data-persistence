// build your `/api/projects` router here
const express = require("express");
const Projects = require("./model");

const router = express.Router();

router.get("/", (req, res, next) => {
    Projects.findProjects()
        .then(project => {
            res.json(project)
        })
        .catch(next)
});

module.exports = router;