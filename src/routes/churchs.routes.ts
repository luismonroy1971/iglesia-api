import { Router } from "express";
import passport from "passport";

const router = Router();

import {
  createChurch,
  deleteChurch,
  getChurch,
  getChurchs,
  updateChurch,
} from "../controllers/church.controller";
import { validateSchema } from "../middlewares/validateSchema.middleware";
import { CreateChurchSchema } from "../schema/church.schema";

router.get("/churchs", getChurchs);

router.get("/churchs/:id", getChurch);

router.post(
  "/churchs",
  validateSchema(CreateChurchSchema),passport.authenticate("jwt", { session: false }),
  createChurch
);

router.delete("/churchs/:id", passport.authenticate("jwt", { session: false }), deleteChurch);

router.put("/churchs/:id", passport.authenticate("jwt", { session: false }), updateChurch);

export default router;
