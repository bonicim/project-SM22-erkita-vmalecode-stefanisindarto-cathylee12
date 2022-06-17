import express from "express";
import { login, signup } from "../controllers/user.js";

const userRouter = express.Router();

userRouter.get('/', (req, res) => {
    res.send('This Works!')
})


userRouter.post("/login", login);
userRouter.post("/signup", signup);

export default userRouter;
