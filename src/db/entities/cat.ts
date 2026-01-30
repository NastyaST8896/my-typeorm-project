import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column,
  ManyToOne,
  JoinColumn, 
 } from "typeorm";

 import {User} from './user'

@Entity()
export class Cat {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  name: string;

  @Column({
    type: 'enum',
    enum: ["black", "white", "orange"],
    default: "black"
  })
  color: string;

  @ManyToOne(() => User, (user) => user.cats)

  @JoinColumn({ name: 'ownerId' })
  owner: User;

  @Column()
  ownerId: string;
}
