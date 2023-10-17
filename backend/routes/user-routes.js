// import {getAllUsers} from "../controllers/user-controller ";
import express from express;
import { addUser, deleteUser, getAllusers, login, signup, updateUser } from "../controllers/user-controller";


const userRouter=express.Router();

userRouter.get('/',getAllusers);
userRoutes.post('/signup',signup)
userRoutes.get('/ :id',getUserById )
userRoutes.put('/ :id',updateUser )
userRoutes.delete('/ :id',deleteUser)
userRoutes.post('/login',login )

export default userRouter;
