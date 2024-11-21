import express from 'express';
import { router } from './src/routes/postsRouter.js';
import { connectToDatabase } from './src/config/dbConfig.js';

const app = express();
await connectToDatabase(process.env.STRING_CONEXAO);
app.use(express.json());
app.use(router);

app.listen(3000, () => {
  console.log('App rodando na porta 3000');
});
