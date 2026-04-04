import { registerAs } from '@nestjs/config';

export default registerAs('database', () => ({
  host: process.env.DB_HOST as string,
  port: parseInt(process.env.DB_PORT || '5432', 10),
  username: process.env.DB_USERNAME as string,
  password: process.env.DB_PASSWORD as string,
  database: process.env.DB_NAME as string,
}));
