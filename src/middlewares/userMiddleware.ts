import { NextFunction, Request, Response } from 'express';

import { userValidation } from '../validation/userValidation';
import { ErrorHandler } from '../errorHandler/errorHandler';
import { userRepository } from '../repositories/userRepository';

class UserMiddleware {
    checkSave(req: Request, res: Response, next: NextFunction) {
        try {
            const { error } = userValidation.save.validate(req.body);

            if (error) {
                next(new ErrorHandler(error.message, 400));
                return;
            }

            next();
        } catch (e) {
            next(e);
        }
    }

    async checkUpdateById(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;

            const { error } = userValidation.update.validate(req.body);
            if (error) {
                next(new ErrorHandler(error.message, 400));
                return;
            }

            const existUser = await userRepository.getById(Number(id));
            if (!existUser) {
                next(new ErrorHandler('User does not exist!', 400));
                return;
            }

            next();
        } catch (e) {
            next(e);
        }
    }

    checkUpdateByRank(req: Request, res: Response, next: NextFunction) {
        try {
            const { error } = userValidation.updateByRank.validate(req.body);
            if (error) {
                next(new ErrorHandler(error.message, 400));
                return;
            }

            next();
        } catch (e) {
            next(e);
        }
    }

    checkParams(req: Request, res: Response, next: NextFunction) {
        try {
            const { id } = req.params;

            const { error } = userValidation.paramsId.validate(id);
            if (error) {
                next(new ErrorHandler(error.message, 400));
                return;
            }

            next();
        } catch (e) {
            next(e);
        }
    }
}

export const userMiddleware = new UserMiddleware();
