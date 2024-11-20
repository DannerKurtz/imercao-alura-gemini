import { connectToDatabase } from '../config/dbConfig.js';
import dotenv from 'dotenv';

dotenv.config();

const buscarTodosPosts = async () => {
  const conexao = await connectToDatabase(process.env.STRING_CONEXAO);
  const database = conexao.db('instabyte');
  const collectionPosts = database.collection('posts');

  return collectionPosts.find().toArray();
};

export { buscarTodosPosts };
