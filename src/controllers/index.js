const { addTask, getAllTasks, getTaskById } = require('./task');
const { addGrade, getGrades, getGradeById, editGrade } = require('./grade');

module.exports = {
  addTask,
  getAllTasks,
  getTaskById,
  addGrade,
  getGrades,
  getGradeById,
  editGrade,
};
