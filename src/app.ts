import express, { Application, Request, Response, } from 'express';
const app: Application = express();
import cors from 'cors';
import { studentRoutes } from './app/modules/Student/Student.route';
import { userRouter } from './app/modules/users/users.route';
import globalErrorHandelar from './app/modules/middlewares/globalErrorHandelar';
import notFound from './app/modules/middlewares/notFound';
// parser
app.use(express.json());
app.use(cors());

// application route
app.use('/api/v1/students', studentRoutes);
// user route
app.use("/api/v1/users", userRouter);

const getAControlar = (req: Request, res: Response) => {
  res.send('hello world');
};

app.get('/', getAControlar);

// console.log(process.cwd());

// not found api
app.use(notFound)

app.use(globalErrorHandelar)
export default app;
