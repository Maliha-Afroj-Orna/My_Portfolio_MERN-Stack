import express from "express";
import { getPortfolio, updateIntro, updateAbout, updateBanner, updateProject, updateResume } from "../controllers/portfolioController.js";
import { adminLogin } from "../controllers/portfolioController.js";

const router = express.Router();

router.get("/getPortfolio-data", getPortfolio);
router.post("/update-intro", updateIntro);
router.post("/update-about", updateAbout);
router.post("/update-banner", updateBanner);
router.post("/update-project", updateProject);
router.post("/update-resume", updateResume);
router.post("/admin-login", adminLogin);

export default router;
