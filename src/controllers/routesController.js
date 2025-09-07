import { Route } from "../schemas/RouteSchema.js";
import { ApiError } from "../errors/ApiError.js";

export class RoutesController {
  static async createRoute(req, res, next) {
    const { name, distance, days, cost } = req.body;
    if (!name || !distance || !days || !cost) {
      throw ApiError.badRequest("Invalid route signature");
    }
    let routeInDb;
    try {
      routeInDb = await Route.create({
        name,
        distance,
        days,
        cost,
      });
      res.json(routeInDb);
    } catch (e) {
      if (e.errorResponse.code === 11000)
        throw ApiError.badRequest("Route already exists");
      throw ApiError.internal();
    }
  }

  static async getAllRoutes(req, res, next) {
    let allRoutes;
    try {
      allRoutes = await Route.find({});
    } catch (e) {
      throw ApiError.internal();
    }
    res.json(allRoutes);
  }
}
