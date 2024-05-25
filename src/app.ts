import express, { Application, Request, Response } from 'express';
const app: Application = express();
import cors from 'cors';
// parser
app.use(express.json());
app.use(cors);

const getAControlar = (req: Request, res: Response) => {
  res.send('hello world');
}

app.get('/', getAControlar);

console.log(process.cwd());

export default app;
