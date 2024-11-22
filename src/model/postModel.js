import { connectToDatabase } from '../config/dbConfig.js';
import { ObjectId } from 'mongodb';
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

const updatePost = async (id, post) => {
  const database = conexao.db('instabyte');
  const collection = database.collection('posts');
  const objId = ObjectId.createFromHexString(id);

  return collection.updateOne({ _id: new ObjectId(objId) }, { $set: post });
};

export { getInDataBase, insertPost, updatePost };
