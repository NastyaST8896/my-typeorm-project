import { Request, Response } from "express";
import { Cats } from '../db/entities/cats'
import { catsRepository } from "../repositories/cats-repository";

export class CatsController {

  newCats = async (req: Request, res: Response): Promise<void> => {
    try {
      const { name, age } = req.body;

      const cat = new Cats();
      cat.name = 'BonBon';

      catsRepository.save(cat);
      res.status(201).json(cat)
    } catch {
      res.status(500).json({message:'Internal server error'})
    }
  }
}
