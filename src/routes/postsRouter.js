import express from 'express';
import multer from 'multer';
import {
  getPosts,
  createPost,
  uploadImage,
} from '../controllers/postController.js';

const upload = multer({ dest: './uploads' });

const router = express.Router();

router.get('/posts', getPosts);
router.post('/posts', createPost);
router.post('/upload', upload.single('imagem'), uploadImage);

export { router };
