import express, { Application } from 'express';
import cors from 'cors';
import 'dotenv/config';

const app: Application = express();
app.use(express.json());
app.use(cors());

import todoRoute from './routes/todoRoute';

app.use('/api/todos', todoRoute);

export { app };
