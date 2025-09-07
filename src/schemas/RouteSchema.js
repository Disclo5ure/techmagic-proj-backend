import { model, Schema } from "mongoose";

const RouteSchema = new Schema({
  name: { type: String, unique: true },
  distance: Number,
  days: Number,
  cost: Number,
});

export const Route = model("Route", RouteSchema);
