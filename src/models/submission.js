const { model, Schema } = require('mongoose');

const submissionSchema = new Schema(
  {
    childName: {
      type: String,
      required: true,
    },
    taskDetails: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

const Submission = model('Submission', submissionSchema);

module.exports = Submission;
