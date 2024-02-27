class ApiError extends Error {
  constructor(
    statusCode,
    messgae = "Something went wrong",
    errors = [],
    stack = ""
  ) {
    super(messgae);
    this.statusCode = statusCode;
    this.data = null;
    this.message = message;
    this.success = false;
    this.errors = errors;

    if (stack) {
      this.stack = stack;
    } else {
      Error.captureStackTrace(this, this.constructor);
    }
  }
}

export { ApiError };
