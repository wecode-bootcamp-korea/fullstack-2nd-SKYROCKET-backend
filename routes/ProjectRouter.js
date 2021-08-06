import express from 'express';
import { ProjectController } from '../controllers';

const router = express.Router();

router.get('', ProjectController.findProjects);

export default router;
