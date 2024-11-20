import { buscarTodosPosts } from '../model/postModel.js';

const getPosts = async (req, res) => {
  const postsFind = await buscarTodosPosts();

  res.status(200).json({ postsFind });
};

export { getPosts };
