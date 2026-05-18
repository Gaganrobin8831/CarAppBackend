import express from 'express'
import { Login, Register, getAllUsers, getUserById, updateUser, deleteUser } from '../Controller/userController.js'
const userRouter = express.Router()

userRouter.get("/",(req,res)=>{
    res.send("Hello From Router")
})

userRouter.post("/Reg",Register)
userRouter.post("/login",Login)
userRouter.get("/all", getAllUsers)
userRouter.get("/:id", getUserById)
userRouter.put("/:id", updateUser)
userRouter.delete("/:id", deleteUser)

export default userRouter