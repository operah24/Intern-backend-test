const Submission = require('../models/submission');

//add task
const addTask = async (req, res) => {
  try {
    const { childName, taskDetails } = req.body;
    const submission = new Submission({
      childName: childName,
      taskDetails: taskDetails,
    });
    await submission.save();
    return res.status(201).json({
      submission,
    });
  } catch (error) {
    res.status(500).json({
      message: 'error',
      error,
    });
  }
};

//get all tasks
const getAllTasks = async (req, res) => {
  try {
    const tasks = await Submission.find();
    return res.status(200).json({
      tasks,
    });
  } catch (error) {
    res.status(500).json({
      message: 'error',
      error,
    });
  }
};

//get specific task by id
const getTaskById = async (req, res) => {
  try {
    const task = await Submission.findById(req.params.id);
    if (!task) {
      return res.status(404).json({
        message: "Child's Task Not Found",
      });
    }
    return res.status(200).json({
      task,
    });
  } catch (error) {
    res.status(500).json({
      message: 'error',
      error,
    });
  }
};

module.exports = { addTask, getAllTasks, getTaskById };
