import { Router } from "express";
const router = Router();
import userRouter from "./userRouter.js";
import routesRouter from "./routesRouter.js";
import driversRouter from "./driversRouter.js";
import { AuthMiddleware } from "../middlewares/AuthMiddleware.js";
import completedTripsRouter from "./completedTripsRouter.js";

router.use("/user", userRouter);
router.use("/drivers", AuthMiddleware, driversRouter);
router.use("/routes", AuthMiddleware, routesRouter);
// router.use("/trips", AuthMiddleware, completedTripsRouter);

export default router;
