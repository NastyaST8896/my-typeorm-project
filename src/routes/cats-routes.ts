import { Router } from 'express';
import catsController from '../controllers/cats-controller';

export const catsRouter = Router()
  .post('/', catsController.createCat)
  .get('/', catsController.getAllCat)
  .get('/:id', catsController.getCat);
