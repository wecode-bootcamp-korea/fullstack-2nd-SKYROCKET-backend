import express from 'express';
import { ProjectController } from '../controllers';

const router = express.Router();

router.get('', ProjectController.findProjects);
router.get('/category', ProjectController.findAllCategories);
router.get('/status', ProjectController.findAllStatuses);

export default router;
