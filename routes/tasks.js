const express = require('express');
const router = express.Router();
const {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
} = require('../conrollers/tasks');

router.route('/').get(getAllTasks);


module.exports = router;