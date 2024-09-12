// routes/sample.js
/**
 * @swagger
 * /sample:
 *   get:
 * 	   param: hello ther
 *     summary: Returns a sample message
 *     responses:
 *       200:
 *         description: A successful response
 */
import { Router } from "express";
const router = Router();

router.get("/sample", (req, res) => {
  res.json({ message: "This is a sample message" });
});

export default router;
