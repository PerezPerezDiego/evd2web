import express from 'express'
import { userController } from './usuarios.controller';

const userRouter = express.Router();

userRouter.get('/',userController.getUsers)
userRouter.get('/:id',userController.getUserById)
userRouter.get('/nombre/:nombre',userController.getUserByName)


export default userRouter