import { Router } from "express";
import catsController from "../controllers/cats-controller";

const router = Router();


router.post("/", catsController.createCat);
router.get("/allcats", catsController.getAllCat);


export default router;