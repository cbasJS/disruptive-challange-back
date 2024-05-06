import mongoose from "mongoose";

import uniqueValidator from "mongoose-unique-validator";

const tematicSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.ObjectId,
    default: new mongoose.Types.ObjectId(),
  },
  name: {
    type: String,
    required: true,
    index: true,
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
  createdInfo: {
    createdAt: {
      type: Date,
      default: new Date(),
    },
    user: {
      id: {
        type: mongoose.Schema.ObjectId,
        required: true,
      },
      userName: {
        type: String,
        required: true,
      },
    },
  },
});

tematicSchema.plugin(uniqueValidator);

export const TematicModel = mongoose.model("Tematic", tematicSchema);
