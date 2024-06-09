import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import { TErrorSources } from '../interface/error';
import config from '../config';
import { handleError } from '../AppError/handleZodError';

const globalErrorHandler: ErrorRequestHandler = (
  err,
  req,
  res,
  next,
) => {
  let statusCode = err.statusCode || 500;
  let message = err.message || 'Something went wrong!';



  let errorSources: TErrorSources = [{
    path: '',
    message: "Some thing went wrong"
  }]



  if (err instanceof ZodError) {
    const simplifiedError = handleError(err)
    statusCode = simplifiedError.statusCode
    message = simplifiedError.message
    errorSources = simplifiedError.errorSources
    message: "It's come form zod brother"
  }

  return res.status(statusCode).json({
    success: false,
    message,
    // error: err,
    errorSources,
    stack: config.NODE_ENV === 'development' ? err?.stack : null
  });
};

export default globalErrorHandler;
/**
 * success
 * message
 * errorSources:[
 * path:"",
 * message:""
]*/ 