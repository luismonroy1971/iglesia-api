import { Router } from "express";
import passport from "passport";
import { signIn, signUp, updateInitial} from "../controllers/user.controller";

const router = Router();

router.post("/signup", signUp);
router.post("/signin", signIn);
router.post("/updateinitial/:id", passport.authenticate("jwt", { session: false }),updateInitial);

export default router;
