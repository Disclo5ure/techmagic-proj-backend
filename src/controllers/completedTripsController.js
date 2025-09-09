import { ApiError } from "../errors/ApiError.js";
import { CompletedTrip } from "../schemas/CompletedTripSchema.js";
import { Driver } from "../schemas/DriverSchema.js";
import { Route } from "../schemas/RouteSchema.js";

export class CompletedTripsController {
  static async createTrip(req, res, next) {
    const { route, drivers, startDate, endDate, bounty } = req.body;
    let tripInDb;
    try {
      const driversPromises = drivers.map(
        async (driverId) => await Driver.findById(driverId),
      );
      const driversForTrip = await Promise.all(driversPromises);
      const routeForTrip = await Route.findById(route);
      tripInDb = await CompletedTrip.create({
        route: routeForTrip,
        drivers: driversForTrip,
        startDate,
        endDate,
        bounty,
      });
      res.json(tripInDb);
    } catch (e) {
      throw ApiError.internal();
    }
  }

  static async deleteTrip(req, res, next) {
    const { _id } = req.body;
    try {
      await CompletedTrip.findByIdAndDelete(_id);
      res.json({ message: "Trip deleted" });
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
