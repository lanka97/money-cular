import mongoose from "mongoose";

const SampleSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  age: {
    type: Number,
    default: 0,
  },
});

const Sample = mongoose.model("Sample", SampleSchema);

export default Sample;