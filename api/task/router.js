// build your `/api/tasks` router here
const express = require('express')
const Task = require('./model')

const router = express.Router()

router.get('/', (req, res, next) => {
    Task.findTask()
        .then(tasks => {
            res.json(tasks)
        })
        .catch(next)
})

router.post('/', (req, res, next) => {
    Task.insertTask(req.body)
        .then(newTask => {
            newTask.task_completed ? newTask.task_completed = true : newTask.task_completed = false;
            res.status(201).json(newTask)
        })
        .catch(next)
})

module.exports = router