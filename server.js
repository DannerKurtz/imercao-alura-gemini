import express from 'express';

const posts = [
  {
    id: 1,
    descrição: 'Um lindo pôr do sol na praia',
    imagem: 'https://example.com/imagens/por-do-sol.jpg',
  },
  {
    id: 2,
    descrição: 'Gato adorável fazendo careta',
    imagem: 'https://example.com/imagens/gato-careta.png',
  },
  {
    id: 3,
    descrição: 'Montanha coberta de neve',
    imagem: 'https://example.com/imagens/montanha-neve.jpeg',
  },
];

const app = express();

app.use(express.json());

app.listen(3000, () => {
  console.log('App rodando na porta 3000');
});

app.get('/posts/', (req, res) => {
  res.status(200).json(posts);
});

function buscarPostPorId(id) {
  return posts.findIndex((post) => {
    return post.id === Number(id);
  });
}

app.get('/posts/:id', (req, res) => {
  const index = buscarPostPorId(req.params.id);

  res.status(200).json(posts[index]);
});
