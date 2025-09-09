import { Router } from "express";
import { CompletedTripsController } from "../controllers/completedTripsController.js";
const completedTripsRouter = Router();

/**
 * @openapi
 * /trips/createTrip:
 *   post:
 *     summary: Create a trip
 *     tags:
 *       - Trips
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               route:
 *                 type: string
 *               drivers:
 *                 type: array
 *                 items:
 *                   id:
 *                     type: string
 *               startDate:
 *                 type: string
 *                 format: date
 *               endDate:
 *                 type: string
 *                 format: date
 *               bounty:
 *                 type: number
 *     responses:
 *       200:
 *         description: Created trip
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   route:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                       name:
 *                         type: string
 *                       distance:
 *                         type: number
 *                       days:
 *                         type: number
 *                       cost:
 *                         type: number
 *                   drivers:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         _id:
 *                           type: string
 *                         surname:
 *                           type: string
 *                         name:
 *                           type: string
 *                         patronymic:
 *                           type: string
 *                         experience:
 *                           type: number
 *                   startDate:
 *                     type: string
 *                     format: date
 *                   endDate:
 *                     type: string
 *                     format: date
 *                   bounty:
 *                     type: number
 */

completedTripsRouter.post("/createTrip", CompletedTripsController.createTrip);

/**
 * @openapi
 * /trips/deleteTrip:
 *   delete:
 *     summary: Delete a trip by ID
 *     tags:
 *      - Trips
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               _id:
 *                 type: string
 *     responses:
 *       200:
 *         description: Success message
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Trip deleted"
 */

completedTripsRouter.delete("/deleteTrip", CompletedTripsController.deleteTrip);

/**
 * @openapi
 * /trips/getAllTrips:
 *   get:
 *     summary: Get all trips
 *     tags:
 *       - Trips
 *     responses:
 *       200:
 *         description: All trips
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   _id:
 *                     type: string
 *                   route:
 *                     type: object
 *                     properties:
 *                       _id:
 *                         type: string
 *                       name:
 *                         type: string
 *                       distance:
 *                         type: number
 *                       days:
 *                         type: number
 *                       cost:
 *                         type: number
 *                   drivers:
 *                     type: array
 *                     items:
 *                       type: object
 *                       properties:
 *                         _id:
 *                           type: string
 *                         surname:
 *                           type: string
 *                         name:
 *                           type: string
 *                         patronymic:
 *                           type: string
 *                         experience:
 *                           type: number
 *                   startDate:
 *                     type: string
 *                     format: date
 *                   endDate:
 *                     type: string
 *                     format: date
 *                   bounty:
 *                     type: number
 */

completedTripsRouter.get("/getAllTrips", CompletedTripsController.getAllTrips);

export default completedTripsRouter;
