import express from 'express';
import incidentController from '../Controllers/incidentController';
const router = express.Router();

router.post('/create', incidentController.create);
router.get('/getAll', incidentController.getAll);
router.delete('/delete/:id', incidentController.delete);
router.patch('/edit/:id/comment', incidentController.editComment);
router.patch('/edit/:id/location', incidentController.editLocation);
router.get('/find/:id', incidentController.find);


export default router;