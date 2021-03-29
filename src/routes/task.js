const express = require('express');
const { addTask, getAllTasks, getTaskById } = require('../controllers');

const router = new express.Router();

router.post('/task', addTask);
router.get('/task', getAllTasks);
router.get('/task/:id', getTaskById);

module.exports = router;
