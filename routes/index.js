import express from 'express';
import UserRouter from './UserRouter';
import KakaoRouter from './KakaoRouter';

const router = express.Router();

router.use('/user', UserRouter);
router.use('/kakao', KakaoRouter);

export default router;
