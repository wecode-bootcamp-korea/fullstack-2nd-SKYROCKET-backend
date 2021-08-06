import express from 'express';
import { KakaoController } from '../controllers';

const router = express.Router();

router.post('/login', KakaoController.kakaoLogin);

export default router;
