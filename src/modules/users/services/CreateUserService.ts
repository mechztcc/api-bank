import AppError from "@shared/errors/AppError";
import { inject, injectable } from "tsyringe";
import { UsersRepository } from "../typeorm/repositories/UsersRepository";

@injectable()
export class CreateUserService {

    constructor(@inject('UsersRepository') private usersRepository: UsersRepository) { }

    public async execute({ first_name, second_name, email, cpf, password }): Promise<any> {
        const emailExists = await this.usersRepository.findByEmail(email);

        if (emailExists) {
            throw new AppError('Email address already used');
        }

        const user = await this.usersRepository.create({ first_name, second_name, email, cpf, password });
        return user;

    }
}