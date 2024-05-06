import mongoose from "mongoose";

const tematicSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true,
  },
  thumbnailImage: {
    type: String,
    required: true,
  },
  allowVideo: {
    type: Boolean,
    default: false,
  },
  allowImage: {
    type: Boolean,
    default: false,
  },
  allowText: {
    type: Boolean,
    default: false,
  },
});

export const TematicModel = mongoose.model("Tematic", tematicSchema);
