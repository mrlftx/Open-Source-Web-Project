import express from "express"
import {createUser, showUsers} from "../controllers/users.js";

const router = express.Router();

router.get("/users/:username", showUsers);

router.post("/users", createUser);

export default router;