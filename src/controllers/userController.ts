import { Request, Response, NextFunction } from 'express';

import { userRepository } from '../repositories/userRepository';
import { userService } from '../services/userService';

class UserController {
    async save(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            await userRepository.save(req.body);
            const users = await userRepository.getAll();

            res.json(users);
        } catch (e) {
            next(e);
        }
    }

    async getAll(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const users = await userRepository.getAll();

            res.json(users).status(200);
        } catch (e) {
            next(e);
        }
    }

    async updateByRank(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            await userService.updateByRank(req.body);
            const users = await userRepository.getAll();

            res.json(users);
        } catch (e) {
            next(e);
        }
    }

    async updateById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { id } = req.params;
            await userRepository.updateById(Number(id), req.body);
            const users = await userRepository.getAll();

            res.json(users);
        } catch (e) {
            next(e);
        }
    }

    async deleteById(req: Request, res: Response, next: NextFunction): Promise<void> {
        try {
            const { id } = req.params;
            await userRepository.deleteById(Number(id));
            const users = await userRepository.getAll();

            res.json(users).status(200);
        } catch (e) {
            next(e);
        }
    }
}

export const userController = new UserController();
