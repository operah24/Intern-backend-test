const express = require('express');
const taskRoute = require('./task');
const gradeRoute = require('./grade');

const router = new express.Router();

router.use(taskRoute);
router.use(gradeRoute);

module.exports = router;
