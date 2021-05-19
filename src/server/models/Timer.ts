import mongoose, { Document } from 'mongoose'
const Schema = mongoose.Schema;
const timerSchema = new Schema(
  {
    timer: {
      type: Number,
      required: true,
    },
    tag: {
      type: String,
      trim: true,
      required: true,
    },
    status: {
      type: Boolean,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);

export default mongoose.model('Timer', timerSchema)
