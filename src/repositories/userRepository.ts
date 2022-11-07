import { getManager, UpdateResult } from 'typeorm';

import { IUser, IUserFromClient, UserEntity } from '../entity/userEntity';

class UserRepository {
    save(data: IUserFromClient): Promise<UserEntity> {
        return getManager().getRepository(UserEntity).save(data);
    }

    getAll(): Promise<UserEntity[]> {
        return getManager().getRepository(UserEntity)
            .createQueryBuilder('user')
            .orderBy('user.rank', 'ASC')
            .getMany();
    }

    getById(id: number): Promise<UserEntity | undefined> {
        return getManager().getRepository(UserEntity).findOne({ id });
    }

    updateById(id: number, updateData: Partial<IUser>): Promise<UpdateResult> {
        return getManager().getRepository(UserEntity).update({ id }, updateData);
    }

    async deleteById(id: number): Promise<void> {
        await getManager().getRepository(UserEntity).softDelete({ id });
    }
}

export const userRepository = new UserRepository();
