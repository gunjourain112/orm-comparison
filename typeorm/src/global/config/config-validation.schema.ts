import { appValidationSchema } from './app/app-validation.schema';
import { databaseValidationSchema } from './database/database-validation.schema';

export const configValidationSchema = appValidationSchema.concat(
  databaseValidationSchema,
);
