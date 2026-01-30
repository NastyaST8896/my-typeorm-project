import { Request, Response } from "express"
import { CatType } from "./cat-controller"
import { User } from "../db/entities/user"
import { Cat } from "../db/entities/cat"
import { catRepository, userRepository } from '../repositories/repository';

type UserType = {
  id?: number,
  firstName: string,
  lastName: string,
  age: number,
  cats?: CatType[]
}

const createUser = async (req: Request<{}, {}, UserType>, res: Response): Promise<void> => {
  try {
    const { firstName, lastName, age } = req.body
    const user = new User();
    user.firstName = firstName;
    user.lastName = lastName;
    user.age = age;

    await userRepository.manager.save(user);
    res.status(200).json(user);
  } catch (err) {
    console.log('err', err);
    res.status(500).json({ message: err.message });
  }
};

// const getAllUsers = async (req: Request, res: Response): Promise<void> => {
//   try {
//     const allUsers = await userRepository.find();

//     res.status(200).json(allUsers);
//   } catch (err) {
//     console.log('err', err);
//     res.status(500).json({ message: err.message });
//   }
// };

// const getUser = async (req: Request<{ id: string }>, res: Response): Promise<void> => {
//   try {
//     const userId = parseInt(req.params.id);
//     const user = await userRepository.findOneBy({ id: userId });

//     res.status(200).json(user);
//   } catch (err) {
//     console.log('err', err);
//     res.status(500).json({ message: err.message });
//   }
// };

// const addCatToUser = async (req: Request<{ id: string }>, res: Response): Promise<void> => {
//   try {
//     const userId = parseInt(req.params.id);
//     const { name, color }: CatType = req.body
//     const user = await userRepository.findOneBy({ id: userId });



//     res.status(200).json(user);
//   } catch (err) {
//     console.log('err', err);
//     res.status(500).json({ message: err.message });
//   }
// };

export default {
  createUser,
  // getAllCat,
  // getCat
};