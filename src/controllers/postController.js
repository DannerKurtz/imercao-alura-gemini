import fs from 'fs';
import { getInDataBase, insertPost } from '../model/postModel.js';

const getPosts = async (req, res) => {
  const postsFind = await getInDataBase();

  res.status(200).json({ postsFind });
};

const createPost = async (req, res) => {
  const newPost = req.body;
  try {
    const insertInDataBasePost = await insertPost(newPost);
    res.status(201).json(insertInDataBasePost);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'erro na requisição' });
  }
};

const uploadImage = async (req, res) => {
  const novoPost = {
    descricao: '',
    imagem_url: req.file.originalname,
    alt: '',
  };
  try {
    const postCriado = await insertPost(novoPost);
    const imagemAtualizada = `uploads/${postCriado.insertedId}.png`;
    fs.renameSync(req.file.path, imagemAtualizada);
    res.status(200).json(postCriado);
  } catch (erro) {
    console.error(erro.message);
    res.status(500).json({ Erro: 'Falha na requisição' });
  }
};

export { getPosts, createPost, uploadImage };
