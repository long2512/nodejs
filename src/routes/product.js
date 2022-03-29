import { Router } from "express";
import { create, get, list, remove, update } from "../controllers/product";
import { checkAuth, isAdmin, isAuth, requiredSigin } from "../middleware/checkAuth";
const router = Router();

router.get("/products", checkAuth, list);

router.post("/products/:userId", requiredSigin, isAuth, isAdmin, create);

router.get("/products/:id", checkAuth, get);

router.delete("/products/:id", checkAuth, remove);

router.put("/products/:id", checkAuth, update);

export default router;