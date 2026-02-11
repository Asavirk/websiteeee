import express from 'express';
import { clerkWebhooks } from '../controllers/userControllers.js';

const router = express.Router();

router.post('/webhooks/clerk', clerkWebhooks)

export default router;
