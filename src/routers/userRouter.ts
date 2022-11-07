import { Router } from 'express';

import { userController } from '../controllers/userController';
import { userMiddleware } from '../middlewares/userMiddleware';

export const userRouter = Router();

userRouter.post(
    '',
    userMiddleware.checkSave,
    userController.save,
);
userRouter.get('', userController.getAll);

userRouter.post(
    '/updateByRank',
    userMiddleware.checkUpdateByRank,
    userController.updateByRank,
);
userRouter.patch(
    '/:id',
    userMiddleware.checkParams,
    userMiddleware.checkUpdateById,
    userController.updateById,
);
userRouter.delete(
    '/:id',
    userMiddleware.checkParams,
    userController.deleteById,
);
