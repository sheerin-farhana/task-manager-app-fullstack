const Task = require('../models/task');

const getAllTasks = async (req, res) => {
    try {
        const tasks = await Task.find({});
        res.status(200).json({ data: tasks });
    }
    catch (err) {
        res.status(500).json({ message: err.message });
    }
};


const createTask = async (req, res) => {
    try {
        const task = await Task.create(req.body);
        res.status(201).json({ task });
    }
    catch (err) {
        res.status(500).json({ success:false,message: err.message });
        console.log(err);
    }
};

const getTask = async (req, res) => {
    try {
        const { id : taskID } = req.params;
        const task = await Task.findOne({ _id: taskID });
        if (!task) {
            return res.status(404).json({ success: false, message: `No task with id ${taskID}` });
        }
        res.status(200).json({success:true,task:task});
    }
    catch (err) {
        res.status(500).send({ success: false, message: err.message });
    }
};


const deleteTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await Task.findByIdAndDelete({ _id: taskID });
        if (!task) {
            return res.status(404).json({ success: false, message: `No task with id ${taskID}` });
        }
        res.status(200).json({ task });
    }
    catch (err) {
        res.status(500).send({ success: false, message: err.message });
    }
};


const updateTask = async (req, res) => {
    try {
        const { id: taskID } = req.params;
        const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
            new: true,
            runValidators:true,
        });
        if (!task) {
            return res.status(404).json({ success: false, message: `No task with id ${taskID}` });
        }
        res.status(200).json({ task });
    }
    catch (err) {
        res.status(500).json({ message: "error" });
    }
};

module.exports = {
    getAllTasks,
    createTask,
    getTask,
    updateTask,
    deleteTask
}