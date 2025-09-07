import { model, Schema } from "mongoose";

const CompletedTripSchema = new Schema({
  route: { type: String, ref: "routes" },
  driver: { type: String, ref: "drivers" },
  startDate: Date,
  endDate: Date,
  cost: Number,
});

export const CompletedTrip = model("CompletedTrip", CompletedTripSchema);
