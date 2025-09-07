import { ApiError } from "../errors/ApiError.js";
import { CompletedTrip } from "../schemas/CompletedTripSchema.js";

export class CompletedTripsController {
  static async createTrip(req, res, next) {
    const { driver, route, startDate, endDate, cost } = req.body;
    let tripInDb;
    try {
      tripInDb = await CompletedTrip.create({
        driver,
        route,
        startDate,
        endDate,
        cost,
      });
      res.json(tripInDb);
    } catch (e) {
      throw ApiError.internal();
    }
  }

  static async getAllTrips(req, res, next) {
    let allTrips;
    try {
      allTrips = await CompletedTrip.find({});
      res.json(allTrips);
    } catch (e) {
      throw ApiError.internal();
    }
  }
}
