import { ErrorRequestHandler } from 'express';
import { ZodError } from 'zod';
import { TErrorSources } from '../interface/error';
import config from '../config';

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

  const handleError = (err: ZodError) => {
    const errorSources: TErrorSources = err.issues.map((issue) => {
      return {
        path: issue.path[issue.path.length - 1],
        message: issue.message
      }
      // const path = issue.path.length - 1;
      // return path
    })
    const statusCode = 400
    return {
      statusCode,
      message: "validation Error",
      errorSources
    }
  }

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