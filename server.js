import express from 'express';
import { router } from './src/routes/postsRouter.js';
import { connectToDatabase } from './src/config/dbConfig.js';
import cors from 'cors';

const app = express();
const corsOptions = {
  origin: 'http://localhost:8000',
  optionsSuccessStatus: 200,
};
app.use(cors());
app.use(express.static('uploads'));
await connectToDatabase(process.env.STRING_CONEXAO);
app.use(express.json());
app.use(router);

app.listen(3000, () => {
  console.log('App rodando na porta 3000');
});
