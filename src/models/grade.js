const mongoose = require('mongoose');

const gradeSchema = new mongoose.Schema(
  {
    gradeDetails: {
      type: String,
      enum: ['Not Completed', 'Completed'],
      required: true,
    },
    submission: {
      type: mongoose.SchemaTypes.ObjectId,
      ref: 'Submission',
    },
  },
  { timestamps: true }
);

const Grade = mongoose.model('Grade', gradeSchema);

module.exports = Grade;
