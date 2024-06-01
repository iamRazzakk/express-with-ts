import dotenv from 'dotenv';
import path = require('path');

dotenv.config({ path: path.join(process.cwd(), '.env') });
// console.log('PORT:', process.env.PORT);
// console.log('DATABASE_URL:', process.env.DATABASE_URL);
export default {
  port: process.env.PORT,
  database_url: process.env.DATABASE_URL,
  default_password: process.env.DEFAULT_PASSWORD,
  bcrypt_salt_rounds: process.env.BCRYPT_SALT_ROUNDS || 10
};
