import { 
  Entity, 
  PrimaryGeneratedColumn, 
  Column, 
 } from "typeorm";

@Entity()
export class Cats {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true,  })
  name: string;
}
