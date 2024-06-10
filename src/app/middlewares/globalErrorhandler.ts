import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import { TErrorSources } from '../interface/error';
import config from '../config';
import { handleError } from '../Error/handleZodError';
import { handleValidationError } from '../Error/handleValidationError';
import { handleCastError } from '../Error/handleCastError';
import { handleDuplicateError } from '../Error/handleDuplicateError';
import AppError from '../Error/AppError';

const globalErrorHandler: ErrorRequestHandler = (err, req, res) => {
  let statusCode = 500;
  let message = 'Something went wrong!';
  let errorSources: TErrorSources = [{
    path: '',
    message: "Something went wrong"
  }];

  if (err instanceof ZodError) {
    const simplifiedError = handleError(err);
    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorSources = simplifiedError.errorSources;
  } else if (err && err.name === "ValidationError") {
    const simplifiedError = handleValidationError(err);
    statusCode = simplifiedError?.statusCode || statusCode;
    message = simplifiedError?.message || message;
    errorSources = simplifiedError?.errorSources || errorSources;
  } else if (err && err.name === "CastError") {
    const simplifiedError = handleCastError(err);
    statusCode = simplifiedError?.statusCode || statusCode;
    message = simplifiedError?.message || message;
    errorSources = simplifiedError?.errorSources || errorSources;
  } else if (err && err.code === 11000) {
    const simplifiedError = handleDuplicateError(err);
    statusCode = simplifiedError?.statusCode || statusCode;
    message = simplifiedError?.message || message;
    errorSources = simplifiedError?.errorSources || errorSources;
  }
  else if (err instanceof AppError) {
    statusCode = err.statusCode || statusCode;
    message = err?.message || message;
    errorSources = [{
      path: "",
      message: err.message
    }];
  }
  else if (err instanceof Error) {
    message = err?.message || message;
    errorSources = [{
      path: "",
      message: err.message
    }];
  }

  return res.status(statusCode).json({
    success: false,
    message,
    errorSources,
    err,
    stack: config.NODE_ENV === 'development' ? err?.stack : null
  });
};

export default globalErrorHandler;
