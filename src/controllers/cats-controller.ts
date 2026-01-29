import { Request, Response } from "express";
console.log('1')
import { Cats } from '../db/entities/cats'
console.log('2')
import { catsRepository } from "../repositories/cats-repository";

// export class CatsController {

const createCat = async (req: Request, res: Response): Promise<void> => {
  try {
    const { name, age } = req.body;
    console.log('here');

    const cat = new Cats();
    cat.name = 'BonBon2';

    catsRepository.save(cat);
    res.status(201).json(cat)
  } catch (err){
    console.log('err', err);
    res.status(500).json({message:'Internal server error'})
  }
}

const getAllCat = async (req: Request, res: Response): Promise<void> => {
  try {
    const allCats = catsRepository.find();
    console.log(allCats);
    res.status(201).json(allCats);
  } catch (err){
    console.log('err', err);
    res.status(500).json({message: err.message})
  }
}
// }

export default {
  createCat,
  getAllCat
}