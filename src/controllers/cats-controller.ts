import { Request, Response } from 'express';
import { Cats } from '../db/entities/cats';
import { catsRepository } from '../repositories/cats-repository';
import * as console from 'node:console';

type CatType = {
  id?: number,
  name: string,
  color?: "black" | "white" | "orange"
}

const createCat = async (req: Request<{}, {}, CatType>, res: Response): Promise<void> => {
  try {
    const {name, color} = req.body
    const cat = new Cats();
    cat.name = name;
    cat.color = color;

    await catsRepository.save(cat);
    res.status(201).json(cat);
  } catch (err) {
    console.log('err', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getAllCat = async (req: Request, res: Response): Promise<void> => {
  try {
    const allCats = await catsRepository.find();

    res.status(200).json(allCats);
  } catch (err) {
    console.log('err', err);
    res.status(500).json({ message: err.message });
  }
};

const getCat = async (req: Request<{ id: string }>, res: Response): Promise<void> => {
  try {
    const catId = parseInt(req.params.id);
    const cat = await catsRepository.findOneBy({ id: catId });

    if (!cat) {
      res.status(404).json({ error: 'User not found' });
      return
    }

    res.status(200).json(cat);
  } catch (err) {
    console.log('err', err);
    res.status(500).json({ message: err.message });
  }
};

export default {
  createCat,
  getAllCat,
  getCat
};
