import mongoose from "mongoose";

const contentSchema = new mongoose.Schema({
  video: {
    type: String,
    default: "",
  },
  image: {
    type: String,
    default: "",
  },
  text: {
    type: String,
    default: "",
  },
  credits: {
    required: true,
    userID: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
    },
    username: {
      type: String,
      required: true,
    },
  },
  thumbnailImage: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  },
  tematic: {
    id: {
      type: mongoose.SchemaTypes.ObjectId,
      required: true,
    },
    name: {
      type: String,
      required: true,
    },
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

export const ContentModel = mongoose.model("Content", contentSchema);
