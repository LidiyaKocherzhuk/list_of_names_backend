import {
    Column,
    CreateDateColumn,
    DeleteDateColumn,
    Entity,
    PrimaryGeneratedColumn,
} from 'typeorm';

export interface IUser {
    id: number;
    name: string;
    surname?: string;
    rank: number;
    createdAt: string;
    deletedAt?: string;
}

export interface IUserFromClient {
    name: string;
    surname?: string;
    rank: number;
}

@Entity('users', { database: 'task' })
export class UserEntity implements IUser {
    @PrimaryGeneratedColumn()
        id: number;

    @Column({
        type: 'varchar',
        nullable: false,
        width: 50,
    })
        name: string;

    @Column({
        type: 'varchar',
        nullable: true,
        width: 50,
    })
        surname?: string;

    @Column({
        type: 'int',
        nullable: false,
    })
        rank: number;

    @Column({
        nullable: false,
        default: Date.now(),
    })
    @CreateDateColumn({ type: 'timestamp' })
        createdAt: string;

    @Column()
    @DeleteDateColumn({ type: 'timestamp' })
        deletedAt?: string;
}
