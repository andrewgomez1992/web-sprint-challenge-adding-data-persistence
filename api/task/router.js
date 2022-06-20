// build your `/api/tasks` router here
const express = require('express')
const Tasks = require('./model')

const router = express.Router()

router.get('/', async (req, res, next) => {
    const tasks = await Tasks.findTasks()
    res.json(tasks)
    // Tasks.findTasks()
    //     .then(tasks => {
    //         res.json(tasks)
    //     })
    //     .catch(next)
})


// router.get("/", (req, res, next) => {
//     Projects.findProjects()
//         .then(projects => {
//             res.json(projects)
//         })
//         .catch(next)
// });





module.exports = router