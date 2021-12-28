import { UsersRepository } from '@modules/users/typeorm/repositories/UsersRepository';
import { container } from 'tsyringe';

container.registerSingleton<UsersRepository>('UsersRepository', UsersRepository);