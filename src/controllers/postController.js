import fs from 'fs';
import { getInDataBase, insertPost, updatePost } from '../model/postModel.js';
import gerarDescricaoComGemini from '../service/geminiService.js';

const getPosts = async (req, res) => {
  const postsFind = await getInDataBase();

  res.status(200).json(postsFind);
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

const updateNewPost = async (req, res) => {
  const id = req.params.id;
  const urlImage = `http://localhost:3000/${id}.png`;

  try {
    const imgBuffer = fs.readFileSync(`uploads/${id}.png`);
    const description = await gerarDescricaoComGemini(imgBuffer);
    const post = {
      imagem_url: urlImage,
      descricao: description,
      alt: req.body.alt,
    };
    const insertInDataBasePost = await updatePost(id, post);

    res.status(201).json(insertInDataBasePost);
  } catch (error) {
    console.log(error);
    return res.status(500).json({ error: 'erro na requisição' });
  }
};

export { getPosts, createPost, uploadImage, updateNewPost };
