import { Router } from 'express';
import catsController from '../controllers/cat-controller';

export const catsRouter = Router()
  .post('/', catsController.createCat)
  .get('/', catsController.getAllCat)
  // .get('/:id', catsController.getCat);
