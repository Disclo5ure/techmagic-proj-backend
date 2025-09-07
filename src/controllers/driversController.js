import { Driver } from "../schemas/DriverSchema.js";
import { ApiError } from "../errors/ApiError.js";

export class DriversController {
  static async createDriver(req, res, next) {
    const { surname, name, patronymic, experience } = req.body;
    let driverInDb;
    try {
      driverInDb = await Driver.create({
        surname,
        name,
        patronymic,
        experience,
      });
      res.json(driverInDb);
    } catch (e) {
      throw ApiError.internal();
    }
  }

  static async getAllDrivers(req, res, next) {
    let allDrivers;
    try {
      allDrivers = await Driver.find({});
      res.json(allDrivers);
    } catch (e) {
      throw ApiError.internal();
    }
  }
}
