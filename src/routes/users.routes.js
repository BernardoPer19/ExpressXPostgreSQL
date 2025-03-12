import { Router } from "express";
import {
  addUser,
  deleteUser,
  getUserByID,
  getUsers,
  updateUser,
} from "../controllers/users.controller.js";

export const userRouter = Router();

userRouter.get("/users", getUsers);
userRouter.get("/users/:id", getUserByID);
userRouter.post("/users", addUser);
userRouter.delete("/users/:id", deleteUser);
userRouter.put("/users/:id", updateUser);
