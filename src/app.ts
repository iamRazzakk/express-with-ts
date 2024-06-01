import express, { Application, Request, Response, } from 'express';
const app: Application = express();
import cors from 'cors';
import globalErrorHandelar from './app/modules/middlewares/globalErrorHandelar';
import notFound from './app/modules/middlewares/notFound';
import router from './app/router';
// parser
app.use(express.json());
app.use(cors());

// application route
app.use('/api/v1', router);

const test = (req: Request, res: Response) => {
  res.send('hello world');
};

app.get('/', test);

// console.log(process.cwd());

// not found api
app.use(notFound)

app.use(globalErrorHandelar)
export default app;
