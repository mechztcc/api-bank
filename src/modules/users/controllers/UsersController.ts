import { Request, Response } from "express";


export class UsersController {

    public async create(req: Request, res: Response): Promise<Response> {
        return res.json('successo');
    }
}