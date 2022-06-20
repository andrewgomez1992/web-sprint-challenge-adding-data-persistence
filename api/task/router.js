// build your `/api/tasks` router here
const express = require('express')
const Tasks = require('./model')

const router = express.Router()

router.get('/', async (req, res, next) => {
    const tasks = await Tasks.findTasks()
    res.json(tasks)
})






module.exports = router