import { connectToDatabase } from '../config/dbConfig.js';
import dotenv from 'dotenv';

dotenv.config();
const conexao = await connectToDatabase(process.env.STRING_CONEXAO);
const getInDataBase = async () => {
  const database = conexao.db('instabyte');
  const collectionPosts = database.collection('posts');

  return collectionPosts.find().toArray();
};

const insertPost = async (newPost) => {
  const database = conexao.db('instabyte');
  const collection = database.collection('posts');
  return collection.insertOne(newPost);
};

export { getInDataBase, insertPost };
