import { Router } from "express";
import { RoutesController } from "../controllers/routesController.js";
const routesRouter = Router();

routesRouter.post("/createRoute", RoutesController.createRoute);

routesRouter.get("/getAllRoutes", RoutesController.getRoutes);

export default routesRouter;
