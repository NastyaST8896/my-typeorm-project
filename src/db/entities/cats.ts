import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
 } from "typeorm";

@Entity()
export class Cats {
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
}
