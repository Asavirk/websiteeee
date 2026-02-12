import express from 'express';
import { clerkWebhooks, userCredits } from '../controllers/userControllers.js';
import {authUser} from '../middleware/authMiddleware.js';

router.get('/profile', authUser, (req, res) => {
  res.json({ clerkID: req.clerkID });
});


const router = express.Router();

router.post('/webhooks/clerk', clerkWebhooks)
userRouter.get('/credits', authUser, userCredits)

export default router;
