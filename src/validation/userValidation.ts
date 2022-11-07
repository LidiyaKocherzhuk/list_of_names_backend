import Joi from 'joi';

export const userValidation = {
    save: Joi.object({
        name: Joi.string()
            .required()
            .min(2)
            .max(50),
        surname: Joi.string()
            .allow('')
            .min(2)
            .max(50),
        rank: Joi.number()
            .required(),
    }),

    update: Joi.object({
        name: Joi.string()
            .allow('')
            .min(2)
            .max(50),
        surname: Joi.string()
            .allow('')
            .min(2)
            .max(50),
        rank: Joi.number()
            .allow(''),
    }),

    updateByRank: Joi.array()
        .items({
            id: Joi.number()
                .required(),
            name: Joi.string()
                .required()
                .min(2)
                .max(50),
            surname: Joi.string()
                .allow('')
                .min(2)
                .max(50),
            rank: Joi.number()
                .required(),
            createdAt: Joi.string()
                .required(),
            deletedAt: Joi.any(),
        }),

    paramsId: Joi.string()
        .required(),
};
