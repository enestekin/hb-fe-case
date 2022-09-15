import express from 'express';
import {
  addToBasket,
  deleteFromBasket,
} from '../controllers/basketController.js';

const router = express.Router();

router.route('/').post(addToBasket);
router.route('/').delete(deleteFromBasket);

export default router;
