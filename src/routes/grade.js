const express = require('express');
const {
  addGrade,
  getGrades,
  getGradeById,
  editGrade,
} = require('../controllers');

const router = new express.Router();

router.post('/task/:submissionId/grade', addGrade);
router.get('/grade', getGrades);
router.get('/grade/:id', getGradeById);
router.patch('/grade/:id', editGrade);

module.exports = router;
