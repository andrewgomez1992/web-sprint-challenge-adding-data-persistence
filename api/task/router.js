// build your `/api/tasks` router here
const express = require('express')
const helpers = require('./model')

const router = express.Router()

router.get('/tasks', (req, res, next) => {
    helpers.getTasks()
        .then(tasks => {
            res.json(tasks)
        })
        .catch(next)
})






module.exports = router