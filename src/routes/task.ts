import {Request, Response, Router} from 'express';
import { getTaskCtrl, deleteTaskCtrl,getTasksCtrl,postTaskCtrl,updateTaskCtrl } from '../controllers/task';

const router = Router();

router.get('/', getTasksCtrl);
router.post('/', postTaskCtrl);
router.get('/:id', getTaskCtrl);
router.put('/:id', updateTaskCtrl);
router.delete('/:id', deleteTaskCtrl);

export { router }