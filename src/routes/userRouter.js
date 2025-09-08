import { Router } from "express";
const userRouter = Router();
import { UserController } from "../controllers/userController.js";

/**
 * @openapi
 * /user/registration:
 *   post:
 *     summary: Register a user
 *     tags:
 *      - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Registered user token
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 */

userRouter.post("/registration", UserController.createUser);

/**
 * @openapi
 * /user/login:
 *   post:
 *     summary: Login a user
 *     tags:
 *      - User
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               email:
 *                 type: string
 *               password:
 *                 type: string
 *     responses:
 *       200:
 *         description: Logged-in user token
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 token:
 *                   type: string
 */

userRouter.post("/login", UserController.loginUser);

export default userRouter;
