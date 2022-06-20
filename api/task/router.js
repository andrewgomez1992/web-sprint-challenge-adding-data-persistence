// build your `/api/tasks` router here
const express = require('express')
const Tasks = require('./model')

const router = express.Router()

router.get('/', (req, res, next) => {
    Tasks.find()
        .then(tasks => {
            res.json(tasks)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    Tasks.insert(req.body)
        .then(newTask => {
            newTask.task_completed ? newTask.task_completed = true : newTask.task_completed = false;
            res.status(201).json(newTask)
        })
        .catch(next)
})

// if (newTask.completed) {
//     return newTask.task_completed = true
// } else {
//     return newTask.task_completed = false
// }






module.exports = router