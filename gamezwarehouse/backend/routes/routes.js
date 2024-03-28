import express from "express"
import {createUser, showUsers} from "../controllers/users.js";
import {showProductByName, showProducts} from "../controllers/product.js";

const router = express.Router();

router.get("/api/users/:username", showUsers);

router.get("/api/products/:name", showProductByName);

router.get("/api/products", showProducts);

router.post("/api/users", createUser);

export default router;