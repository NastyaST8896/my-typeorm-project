import { Router } from "express";
import { CatsController } from "../controllers/cats-controller";

const router = Router();
const catsController = new CatsController();

router.post("/cats", catsController.newCats);

export default router;