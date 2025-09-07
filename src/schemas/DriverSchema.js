import { model, Schema } from "mongoose";

const DriverSchema = new Schema({
  surname: String,
  name: String,
  patronymic: String,
  experience: Number,
});

export const Driver = model("Driver", DriverSchema);
