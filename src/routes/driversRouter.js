import { Router } from "express";
import { DriversController } from "../controllers/driversController.js";
const driversRouter = Router();

/**
 * @openapi
 * /drivers/createDriver:
 *   post:
 *     summary: Create a driver
 *     tags:
 *      - Drivers
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               surname:
 *                 type: string
 *               name:
 *                 type: string
 *               patronymic:
 *                 type: string
 *               experience:
 *                 type: number
 *     responses:
 *       200:
 *         description: Created driver
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 surname:
 *                   type: string
 *                 name:
 *                   type: string
 *                 patronymic:
 *                   type: string
 *                 experience:
 *                   type: number
 */

driversRouter.post("/createDriver", DriversController.createDriver);

/**
 * @openapi
 * /drivers/getDriver:
 *   get:
 *     summary: Get a driver by ID
 *     tags:
 *      - Drivers
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
 *         description: A driver
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 _id:
 *                   type: string
 *                 surname:
 *                   type: string
 *                 name:
 *                   type: string
 *                 patronymic:
 *                   type: string
 *                 experience:
 *                   type: number
 */

driversRouter.get("/getDriver", DriversController.getDriver);

/**
 * @openapi
 * /drivers/getAllDrivers:
 *   get:
 *     summary: Get all drivers
 *     tags:
 *      - Drivers
 *     responses:
 *       200:
 *         description: All drivers
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                  type: object
 *                  properties:
 *                    _id:
 *                      type: string
 *                    surname:
 *                      type: string
 *                    name:
 *                      type: string
 *                    patronymic:
 *                      type: string
 *                    experience:
 *                      type: number
 */

driversRouter.get("/getAllDrivers", DriversController.getAllDrivers);

export default driversRouter;
