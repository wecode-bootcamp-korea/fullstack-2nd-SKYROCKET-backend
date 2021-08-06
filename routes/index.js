import express from 'express';
import UserRouter from './UserRouter';
import KakaoRouter from './KakaoRouter';
import ProjectRouter from './ProjectRouter';

const router = express.Router();

router.use('/user', UserRouter);
router.use('/kakao', KakaoRouter);
router.use('/project', ProjectRouter);

export default router;
