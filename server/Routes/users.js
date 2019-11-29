import express from 'express';
import UserValidation from '../middleware/userValidation'
import UserController from '../Controllers/userController';
const router = express.Router();

router.post('/auth/signup/', UserController.create);
router.post('/auth/signin/', UserController.signIn);
router.get('/getAll', UserController.getAll);
router.delete('/delete/:id', UserController.delete);
router.get('/find/:id', UserController.find);
router.put('/edit/:id', UserController.edit);





export default router;