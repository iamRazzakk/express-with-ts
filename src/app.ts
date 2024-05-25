import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
import { studentRoutes } from './app/modules/Student/Student.route';
// parser
app.use(express.json());
app.use(cors());

// application route
app.use("/api/v1/students", studentRoutes)

const getAControlar = (req: Request, res: Response) => {
  res.send('hello world');
}

app.get('/', getAControlar);

console.log(process.cwd());

export default app;
