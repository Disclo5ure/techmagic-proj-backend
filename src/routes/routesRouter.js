import { Router } from "express";
import { RoutesController } from "../controllers/routesController.js";
const routesRouter = Router();

/**
 * @openapi
 * /routes/createRoute:
 *   post:
 *     summary: Create a route
 *     tags:
 *      - Routes
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               distance:
 *                 type: number
 *               days:
 *                 type: number
 *               cost:
 *                 type: number
 *     responses:
 *       200:
 *         description: Created route
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 distance:
 *                   type: number
 *                 days:
 *                   type: number
 *                 cost:
 *                   type: number
 */

routesRouter.post("/createRoute", RoutesController.createRoute);

/**
 * @openapi
 * /routes/getRoute:
 *   get:
 *     summary: Get a route by ID
 *     tags:
 *      - Routes
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: string
 *     responses:
 *       200:
 *         description: Route
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 name:
 *                   type: string
 *                 distance:
 *                   type: number
 *                 days:
 *                   type: number
 *                 cost:
 *                   type: number
 */

routesRouter.get("/getRoute", RoutesController.getRoute);

/**
 * @openapi
 * /routes/deleteRoute:
 *   delete:
 *     summary: Delete a route by ID
 *     tags:
 *      - Routes
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
 *                   example: "Route deleted"
 */

routesRouter.delete("/deleteRoute", RoutesController.deleteRoute);

/**
 * @openapi
 * /routes/getAllRoutes:
 *   get:
 *     summary: Get all routes
 *     tags:
 *      - Routes
 *     responses:
 *       200:
 *         description: Route
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                  type: object
 *                  properties:
 *                    _id:
 *                      type: string
 *                    name:
 *                      type: string
 *                    distance:
 *                      type: number
 *                    days:
 *                      type: number
 *                    cost:
 *                      type: number
 */

routesRouter.get("/getAllRoutes", RoutesController.getAllRoutes);

export default routesRouter;
