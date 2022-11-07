import { IUser } from '../entity/userEntity';
import { userRepository } from '../repositories/userRepository';

class UserService {
    async updateByRank(updateData: IUser[]) {
        const users = await userRepository.getAll();

        for (const item of updateData) {
            const index = updateData.indexOf(item);
            if (item.id !== users[index].id) {
                await userRepository.updateById(item.id, { rank: item.rank });
            }
        }
    }
}

export const userService = new UserService();
