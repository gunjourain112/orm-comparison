import * as Joi from 'joi';

export const appValidationSchema = Joi.object({
  PORT: Joi.number().default(3000),
});
