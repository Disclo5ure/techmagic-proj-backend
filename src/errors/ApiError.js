export class ApiError extends Error {
  status;
  constructor(status, message) {
    super();
    this.status = status;
    this.message = message;
  }

  static badRequest(message) {
    return new ApiError(400, message);
  }
  static unauthorized() {
    return new ApiError(401, "Unauthorized");
  }
  static internal() {
    return new ApiError(500, "Internal error");
  }
}
