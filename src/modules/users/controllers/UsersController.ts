import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUserService } from '@modules/users/services/CreateUserService';


export class UsersController {

    public async create(req: Request, res: Response): Promise<Response> {

        const { first_name, second_name, email, cpf, password } = req.body;

        const createUsers = container.resolve(CreateUserService);

        const user = await createUsers.execute({ first_name, second_name, email, cpf, password });

        return res.json(user);
    }
}