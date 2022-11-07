import dotenv from 'dotenv';

dotenv.config();

export const config = {
    SERVER_HOST: process.env.SERVER_HOST,
    FRONTEND_HOST: process.env.FRONTEND_HOST,
    DATABASE_NAME: process.env.DATABASE_NAME,
};