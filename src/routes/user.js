import { Router } from "express";
import { getAll, login, read, register } from "../controllers/user";

const router = Router();

router.post("/signup", register);
router.post("/signin", login);
router.get("/user", getAll)
router.get("/user/:id", read)

export default router;