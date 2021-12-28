import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity('users')
export class User {

    @PrimaryGeneratedColumn('increment')
    id: number;

    @Column()
    first_name: string;

    @Column()
    second_name: string;

    @Column()
    cpf: string;

    @Column()
    email: string;

    @Column()
    password: string;


    @CreateDateColumn()
    created_at: Date;

    @UpdateDateColumn()
    updated_at: Date;

}

