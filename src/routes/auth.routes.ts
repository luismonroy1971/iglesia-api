import { Router } from "express";
import { signIn, signUp, updateInitial} from "../controllers/user.controller";

const router = Router();

router.post("/signup", signUp);
router.post("/signin", signIn);
router.post("/updateinitial/:id", updateInitial);

export default router;
