const { Grade, Submission } = require('../models');

//add grade
const addGrade = async (req, res) => {
  try {
    const { submissionId } = req.params;
    const { gradeDetails } = req.body;
    const grade = new Grade({
      gradeDetails: gradeDetails,
      submission: submissionId,
    });
    await grade.save();

    return res.status(201).json({
      grade,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'error',
      error,
    });
  }
};

//get all grades
const getGrades = async (req, res) => {
  try {
    const grades = await Grade.find().populate({ path: 'submission' });
    return res.status(200).json({
      grades,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      message: 'error',
      error,
    });
  }
};

//get a specific grade by id
const getGradeById = async (req, res) => {
  try {
    const grade = await Grade.findById(req.params.id).populate({
      path: 'submission',
    });
    if (!grade) {
      return res.status(404).json({
        message: 'Grade not found!',
      });
    }
    return res.status(200).json({
      grade,
    });
  } catch (error) {
    res.status(500).json({
      message: 'error',
      error: error,
    });
  }
};

//edit grade by id
const editGrade = async (req, res) => {
  try {
    const grade = await Grade.findById(req.params.id);
    if (!grade) {
      return res.status(404).json({
        message: 'Grade not found',
      });
    }
    grade.gradeDetails = req.body.gradeDetails;
    await grade.save();
    return res.status(200).json({
      grade,
    });
  } catch (error) {
    res.status(500).json({
      message: 'error',
      error: error,
    });
  }
};
module.exports = { addGrade, getGrades, getGradeById, editGrade };
