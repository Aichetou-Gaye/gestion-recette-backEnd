import express from 'express';
import router from './routes/index.js';
import bodyParser from 'body-parser';
import { config } from 'dotenv';
import cors from 'cors';
config();

const app = express();
app.use(bodyParser.json());

const corsOptions = {
  origin: 'http://localhost:5173',
};
app.use(cors(corsOptions));
app.use(router);

const PORT = process.env.NODE_DOCKER_PORT || 3022;
app.listen(PORT, () => {
  console.log(`Successfully connected on ${PORT} `);
});
