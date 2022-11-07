import express from 'express';
import fileUpload from 'express-fileupload';
import { createConnection } from 'typeorm';
import cors from 'cors';

import { apiRouter } from './routers';
import { config } from './config/config';

const app = express();

app.use(fileUpload());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors({ origin: config.FRONTEND_HOST }));

app.use(apiRouter);

// @ts-ignore
app.use('*', (err, req, res, next) => {
    res.status(err.status || 500)
        .json({
            message: err.message,
            data: err.data,
        });
});

const HOST = config.SERVER_HOST;
app.listen(HOST, async () => {
    try {
        console.log(`Server has started on ${HOST} host!`);
        const connection = await createConnection();
        if (connection) {
            console.log('database connected');
        }
    } catch (error) {
        if (error) {
            console.log(error);
        }
    }
});
