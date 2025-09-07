import { Router } from "express";
import { CompletedTripsController } from "../controllers/completedTripsController.js";
const completedTripsRouter = Router();

completedTripsRouter.post("/createTrip", CompletedTripsController.createTrip);

completedTripsRouter.get("/getAllTrips", CompletedTripsController.getAllTrips);

export default completedTripsRouter;
