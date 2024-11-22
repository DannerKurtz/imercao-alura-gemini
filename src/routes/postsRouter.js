import express from 'express';
import multer from 'multer';
import {
  getPosts,
  createPost,
  uploadImage,
  updateNewPost,
} from '../controllers/postController.js';


const upload = multer({ dest: './uploads' });

const router = express.Router();


router.get('/posts', getPosts);
router.post('/posts', createPost);
router.post('/upload', upload.single('imagem'), uploadImage);
router.put('/upload/:id', updateNewPost);

export { router };
