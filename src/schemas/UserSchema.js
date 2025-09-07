import { model, Schema } from "mongoose";

const UserSchema = new Schema({
  email: { type: String, unique: true },
  password: String,
});

export const User = model("User", UserSchema);
