import express from "express"
import {createUser, showUsers} from "../controllers/users.js";

const router = express.Router();

router.get("/api/users/:username", showUsers);

router.post("/api/users", createUser);

export default router;