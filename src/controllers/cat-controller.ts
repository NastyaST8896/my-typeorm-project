import { Request, Response } from 'express';
import { Cat } from '../db/entities/cat';
import { catRepository, userRepository } from '../repositories/repository';
import * as console from 'node:console';
import { User } from '../db/entities/user'

export type CatType = {
  id?: number,
  name: string,
  color?: "black" | "white" | "orange",
  owner: User,
  ownerId: string
}

const createCat = async (req: Request<{}, {}, CatType>, res: Response): Promise<void> => {
  try {
    const {name, color, ownerId} = req.body
    const cat = new Cat();
    cat.name = name;
    cat.color = color;
    cat.ownerId = ownerId

    const result = await catRepository.manager.save(cat);
    res.status(201).json(result);
  } catch (err) {
    console.log('err', err);
    res.status(500).json({ message: 'Internal server error' });
  }
};

const getAllCat = async (req: Request, res: Response): Promise<void> => {
  try {
    // const allCats = await catRepository.find({
    //   relations: {
    //     owner: true
    //   },
    //   select: {
    //     id: true,
    //     color: true,
    //     name: true,
    //     owner: {
    //       firstName: true,
    //       lastName: true
    //     }
    //   }
    // })

    const allCats = await catRepository
    .createQueryBuilder("cat")
    .leftJoinAndSelect("cat.owner", "owner")
    .select([ "cat", "owner.firstName", "owner.lastName"])
    .getMany();


    res.status(200).json(allCats);
  } catch (err) {
    console.log('err', err);
    res.status(500).json({ message: err.message });
  }
};

// const getCat = async (req: Request<{ id: string }>, res: Response): Promise<void> => {
//   try {
//     const catId = parseInt(req.params.id);
//     const cat = await catRepository.findOneBy({ id: catId });

//     if (!cat) {
//       res.status(404).json({ error: 'User not found' });
//       return
//     }

//     res.status(200).json(cat);
//   } catch (err) {
//     console.log('err', err);
//     res.status(500).json({ message: err.message });
//   }
// };

export default {
  createCat,
  getAllCat,
  // getCat
};
