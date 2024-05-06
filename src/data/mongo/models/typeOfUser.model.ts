import mongoose from "mongoose";

const typeOfUserSchema = new mongoose.Schema({
  type: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
});

export const TypeOfUserModel = mongoose.model("Type_Of_User", typeOfUserSchema);
