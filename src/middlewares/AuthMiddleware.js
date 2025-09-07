import { ApiError } from "../errors/ApiError.js";
import jwt from "jsonwebtoken";

export const AuthMiddleware = (req, res, next) => {
  if (req.headers.authorization) {
    try {
      const token = req.headers.authorization.split(" ")[1];
      if (!token) throw new Error();
      const verifiedToken = jwt.verify(token, process.env.SECRET_KEY);
      if (verifiedToken) {
        req.userId = verifiedToken.id;
        next();
      } else throw new Error();
    } catch (e) {
      throw ApiError.unauthorized();
    }
  } else throw ApiError.unauthorized();
};
