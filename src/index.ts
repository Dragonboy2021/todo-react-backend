import mongoose from 'mongoose';
import { app } from './app';

const port: string | undefined = process.env.PORT;

const startServer = async () => {
  mongoose.set('strictQuery', false);
  try {
    await mongoose.connect(process.env.MONGODB_URL!);
    console.log('Connected to database!!!');
    app.listen(port, () => console.log('Application running on port', port));
  } catch (error) {
    console.log('Failed to connect to the database.');
    console.log(error);
  }
};

startServer();
