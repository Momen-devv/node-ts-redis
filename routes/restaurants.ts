import express from 'express';
import { validate } from '../middlewares/validate.js';
import { RestaurantSchema, type Restaurant } from '../schemas/restaurantValidation.js';
const router = express.Router();

router.post('/', validate(RestaurantSchema), (req, res) => {
  const data = req.body as Restaurant;
  res.send('Restaurants');
});

export default router;
