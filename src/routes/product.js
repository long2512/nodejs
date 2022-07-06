import { Router } from "express";
import { userById } from "../controllers/auth";
import { create, get, list, remove, update } from "../controllers/product";
import { isAdmin, isAuth, requiredSigin } from "../middleware/checkAuth"
const router = Router();

router.get("/products", list);

router.post("/products/:userId", requiredSigin, isAuth, isAdmin, create);

router.get("/products/:id", get);

router.delete("/products/:id", remove);

router.put("/products/:id", update);

router.param("userId", userById)

export default router;