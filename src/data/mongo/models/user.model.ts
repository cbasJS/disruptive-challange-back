import mongoose from "mongoose";

import uniqueValidator from "mongoose-unique-validator";

const userSchema = new mongoose.Schema({
  _id: {
    type: mongoose.Schema.ObjectId,
    default: new mongoose.Types.ObjectId(),
  },
  mail: {
    type: String,
    required: true,
    unique: true,
  },
  userName: {
    type: String,
    required: true,
    unique: true,
  },
  typeOfUser: {
    type: String,
    enum: ["admin", "creator", "reader"],
    required: true,
  },
  createdAt: {
    type: Date,
    default: new Date(),
  },
});

userSchema.plugin(uniqueValidator);

export const UserModel = mongoose.model("User", userSchema);
