import { model, Schema } from "mongoose";

const CompletedTripSchema = new Schema({
  route: {
    _id: String,
    name: String,
    distance: Number,
    days: Number,
    bounty: Number,
    __v: Number,
  },
  drivers: [
    {
      _id: String,
      surname: String,
      name: String,
      patronymic: String,
      experience: Number,
      __v: Number,
    },
  ],
  startDate: Date,
  endDate: Date,
  bounty: Number,
});

export const CompletedTrip = model("CompletedTrip", CompletedTripSchema);
