import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from "typeorm";
import {Cat} from './cat';

@Entity()
export class User {

    @PrimaryGeneratedColumn()
    id: number

    @Column({nullable: true})
    firstName: string

    @Column()
    lastName: string

    @Column()
    age: number

    @OneToMany(() => Cat, (cat) => cat.owner)
    cats: Cat[];
}
