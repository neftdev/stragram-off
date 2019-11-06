import { Router } from "express";
import { analyzeWords } from "../controllers/badwords.controller";

const router = Router();

router.post("/analyze-words", analyzeWords);

export default router;
