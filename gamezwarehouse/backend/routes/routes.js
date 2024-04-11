import express from "express"
import {createUser, loginUsers} from "../controllers/users.js";
import {showProductByName, showProducts} from "../controllers/product.js";

const router = express.Router();

router.post("/api/users/login", loginUsers);

router.get("/api/products/:name", showProductByName);

router.get("/api/products", showProducts);

router.post("/api/users", createUser);

export default router;