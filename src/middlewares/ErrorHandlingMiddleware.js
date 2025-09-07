import { ApiError } from "../errors/ApiError.js";

export const ErrorHandlingMiddleware = function (err, req, res, next) {
  if (err instanceof ApiError) {
    res.status(err.status).json({ message: err.message });
  } else res.status(500).json({ message: "Unexpected error" });
};
