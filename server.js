import express from 'express';
import { router } from './src/routes/postsRouter.js';
import { connectToDatabase } from './src/config/dbConfig.js';

const app = express();

app.use(router);
app.use(express.json());

app.listen(3000, () => {
  console.log('App rodando na porta 3000');
});
