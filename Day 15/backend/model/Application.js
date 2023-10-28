import mongoose from 'mongoose';

const { Schema } = mongoose;

const Application = new Schema(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: 'User',
      required: true,
    },
    job: {
      type: Schema.Types.ObjectId,
      ref: 'Job',
      required: true,
    },
    linkedin: {
      type: String,
      required: true,
    },
    portfolio: {
      type: String,
      required: true,
    },
    additional_information: {
      type: String,
    },
  },
  { timestamps: true }
);

export default mongoose.model('Application', Application);
