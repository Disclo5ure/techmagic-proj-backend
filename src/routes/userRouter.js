import { Router } from "express";
const userRouter = Router();
import { UserController } from "../controllers/userController.js";

userRouter.post("/registration", UserController.createUser);

userRouter.post("/login", UserController.loginUser);

export default userRouter;
