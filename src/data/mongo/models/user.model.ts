import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
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

export const UserModel = mongoose.model("User", userSchema);
