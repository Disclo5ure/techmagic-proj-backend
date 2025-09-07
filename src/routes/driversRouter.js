import { Router } from "express";
import { DriversController } from "../controllers/driversController.js";
const driversRouter = Router();

driversRouter.post("/createDriver", DriversController.createDriver);

driversRouter.get("/getAllDrivers", DriversController.getAllDrivers);

export default driversRouter;
